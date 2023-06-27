const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  occupation: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  }
  
});

const Labour = mongoose.model("Labour", UserSchema);

module.exports = Labour;