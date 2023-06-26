const express =require("express")
const bodyParser =require("body-parser")
const mongoose =require("mongoose")

const app=express()
app.use(express.static("/front"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://127.0.0.1:27017/myg')
const db = mongoose.connection

db.on("error",console.error.bind(console,"connection error"))
db.once("open",()=>{
    console.log("database connection success")
})

app.get("/",(req,res)=>{
    return res.status(200).redirect("/front/public/index.html")
})

//user registration
app.get("/signup",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":"*"
    })
    return res.redirect("/src/components/signup.js")
})
//user post values postman
app.post("/signup",(req,res)=>{
    var name = req.body.name
    var password = req.body.password
    var email = req.body.email
    var address = req.body.address
    var bno = req.body.bno
    var city = req.body.city
    var district = req.body.district

    var data = {
        "name":name,
        "password":password,
        "email":email,
        "address":address,
        "bno":bno,
        "city":city,
        "district":district
    }

    db.collection('user').insertOne(data,(err,collection)=>{
        if(err){
            throw err
        }else{
            console.log(data)
            console.log("user record insert success")
        }
    })

    return res.redirect('/src/components/User.js')
})

//user login
app.get("/login",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":"*"
    })
    return res.redirect("/src/components/signup.js")
})

//user login post values postman
app.post("/login",(req,res)=>{
    db.collection('user').findOne({
        email : req.body.email,
        password : req.body.password
    },(err,data)=>{
        if(err){
            res.status(404).json({
                success : "login failed",
                msg : "invalid credentials"
            })
            throw err
        }else{
            console.log(data)
            console.log("user login success")
            res.status(201).json({
                success : "login success",
                msg : "have a nice day"
            })
            //return res.redirect('/src/components/User.js')
        }
    })
})


app.listen(4000,()=>{
    console.log("port 4000 is listening")
})