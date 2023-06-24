const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
require("dotenv").config()

const app = express();

app.use(Router)
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.listen(8000, () => {
    console.log("Server is running at port 8000");
  });