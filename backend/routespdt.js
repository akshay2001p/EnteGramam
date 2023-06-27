const express = require("express");
const userModel = require("./models/addpdt");
const app = express();
app.use(express.json());

app.post("/add_pdt", async (request, response) => {
  try {
    const product = new userModel(request.body);
    await product.save();
    response.send(product);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/view_pdt", async (req, res) => {
  try {
    const products = await userModel.find();
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;