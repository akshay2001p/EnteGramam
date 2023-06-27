const express = require("express");
const userModel = require("./models/addlab");
const app = express();
app.use(express.json());

app.post("/add_lab", async (request, response) => {
  try {
    const labour = new userModel(request.body);
    await labour.save();
    response.send(labour);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/view_lab", async (req, res) => {
  try {
    const labours = await userModel.find();
    res.status(200).send(labours);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;