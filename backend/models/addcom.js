const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  cname: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  }
  
});

const Complaint = mongoose.model("Complaint", UserSchema);

module.exports = Complaint;