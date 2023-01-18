const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

userRouter.post("/register", async (req, res) => {
  const { name, gender, email, city, password } = req.body;

  try {
    const user = await UserModel.find({ email });
    if (user.length != 0) {
      return res.send("Already existing!");
    }
    if (password.length < 8) {
      return res.send("Password is too short!!");
    }
    bcrypt.hash(password, 5, async (err, encrypt_password) => {
      if (err) {
        console.log(err);
      } else {
        const user = new UserModel({
          name,
          gender,
          email,
          city,
          password: encrypt_password,
        });
        await user.save();
        res.send(`${name}'s account has been created.`);
      }
    });
  } catch (error) {
    res.send("Error while registering");
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    // console.log(user.length);

    const hashed_password = user[0].password;
    if (admin.length > 0) {
      bcrypt.compare(password, hashed_password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "coder");
          res.send({ message: "Logged in successfully", token: token });
        } else {
          res.send("Wrong credentials");
        }
      });
    } else {
      res.send("Wrong credentials");
    }
    // console.log(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = {
  userRouter,
};
