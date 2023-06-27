const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  project: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
  
});

const Project = mongoose.model("Project", UserSchema);

module.exports = Project;