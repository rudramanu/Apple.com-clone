const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  status: String,
  name: String,
  image: String,
  colour: String,
  price: String,
  adminID: String,
  userID: String,
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
