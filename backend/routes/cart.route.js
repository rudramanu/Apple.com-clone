const express = require("express");
const { CartModel } = require("../models/cart.model");
const { ProductModel } = require("../models/product.model");
const cartRouter = express.Router();
const jwt = require("jsonwebtoken");

cartRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  if (token) {
    const decoded = jwt.verify(token, "user");
    console.log("decoded:", decoded);
    if (decoded) {
      const userID = decoded.userID;
      req.body.userID = userID;
      const products = await CartModel.find({ userID });
      res.send(products);
    } else {
      return res.send("Please login first");
    }
  } else {
    return res.send("Please login first");
  }
});

cartRouter.post("/add/:id", async (req, res) => {
  const id = req.params.id;
  const likedproduct = await ProductModel.find({ _id: id });
  console.log(likedproduct);

  const token = req.headers.authorization;
  console.log(token);

  if (token) {
    const decoded = jwt.verify(token, "user");
    console.log("decoded:", decoded);
    if (decoded) {
      const userID = decoded.userID;
      req.body.userID = userID;
      likedproduct[0].userID = decoded.userID;
    } else {
      return res.send("Please login first");
    }
  } else {
    return res.send("Please login first");
  }

  try {
    const added_product = await CartModel.insertMany(likedproduct[0]);
    console.log(added_product);
    // await added_product.save();
    res.send("Product is added to the Cart");
  } catch (error) {
    res.send({ Message: "Something went wrong" });
  }
});

cartRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const product = await CartModel.findOne({ _id: id });

  const token = req.headers.authorization;
  console.log(token);

  if (token) {
    const decoded = jwt.verify(token, "user");
    console.log("decoded:", decoded);
    if (decoded) {
      const userID = decoded.userID;
      req.body.userID = userID;
    } else {
      return res.send("Please login first");
    }
  } else {
    return res.send("Please login first");
  }
  const userID_in_product = product.userID;
  console.log(userID_in_product);
  const userID_who_making_request = req.body.userID;
  console.log(userID_who_making_request);
  try {
    if (userID_who_making_request == userID_in_product) {
      await CartModel.findByIdAndRemove({ _id: id });
      res.send("Deleted the product");
    } else {
      res.send("Sorry, You are not authorize");
    }
  } catch (error) {
    console.log(err);
    res.send({ message: "something went wrong" });
  }
});

module.exports = {
  cartRouter,
};
