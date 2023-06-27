const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  pname: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  }
  
});

const Product = mongoose.model("Product", UserSchema);

module.exports = Product;