const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  status: String,
  name: String,
  image: String,
  colour: String,
  price: String,
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
