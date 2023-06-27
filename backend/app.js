const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
const Router1 = require("./routes1")
const Router2 = require("./routespro")
const Router3 = require("./routeslab")
const Router4 = require("./routescom")
const Router5 = require("./routespdt")

require("dotenv").config()

const app = express();

app.use(Router)
app.use(Router1)
app.use(Router2)
app.use(Router3)
app.use(Router4)
app.use(Router5)

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.listen(3500, () => {
    console.log("Server is running at port 3500");
  });