const express = require("express");
const userModel = require("./models/addcom");
const app = express();
app.use(express.json());

app.post("/add_com", async (request, response) => {
  try {
    const complaint = new userModel(request.body);
    await complaint.save();
    response.send(complaint);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/view_com", async (req, res) => {
  try {
    const complaints = await userModel.find();
    res.status(200).send(complaints);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;