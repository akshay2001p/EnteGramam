const express = require("express");
const userModel = require("./models/user");
const app = express();
app.use(express.json());

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
 
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/view_user", async (req, res) => {
  try {
    const users = await userModel.find().exec();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});


module.exports = app