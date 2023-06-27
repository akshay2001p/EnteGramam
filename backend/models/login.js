const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
      },
  password: {
    type: String,
    required: true,
  }
});

const Login = mongoose.model("Login", UserSchema);

module.exports = Login;