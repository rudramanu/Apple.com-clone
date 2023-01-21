const express = require("express");
const { ProductModel } = require("../models/product.model");
const homepageRouter = express.Router();

homepageRouter.get("/gethomepage", async (req, res) => {
  const products = await ProductModel.find();
  res.send(products);
});

module.exports = {
  homepageRouter,
};
