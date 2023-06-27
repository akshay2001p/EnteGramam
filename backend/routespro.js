const express = require("express");
const userModel = require("./models/addpro");
const app = express();
app.use(express.json());

app.post("/add_pro", async (request, response) => {
  try {
    const project = new userModel(request.body);
    await project.save();
    response.send(project);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/view_pro", async (req, res) => {
  try {
    const projects = await userModel.find();
    res.status(200).send(projects);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;