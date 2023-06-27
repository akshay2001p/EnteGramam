const express = require("express");
const User = require("./models/login");
const app = express();
app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).exec();

    if (!user) {
      res.status(400).send({ message: "User not found!" });
      return;
    }

    // Check if the provided password matches the user's password
    const isPasswordValid = user.password === password;

    if (!isPasswordValid) {
      res.status(400).send({ message: "Invalid password!" });
      return;
    }

    // Continue with your login logic here if the email and password are valid

    res.status(200).send({ message: "Login successful!" });

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});





module.exports = app