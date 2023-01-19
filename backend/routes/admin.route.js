const express = require("express");
const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { RoleModel } = require("../models/role.model");

adminRouter.post("/register", async (req, res) => {
  const { name, gender, email, city, password, role } = req.body;

  try {
    const admin = await RoleModel.find({ email });
    if (admin.length != 0) {
      return res.send("Already existing!");
    }
    if (password.length < 8) {
      return res.send("Password is too short!!");
    }
    bcrypt.hash(password, 5, async (err, encrypt_password) => {
      if (err) {
        console.log(err);
      } else {
        const admin = new RoleModel({
          name,
          gender,
          email,
          city,
          password: encrypt_password,
          role,
        });
        await admin.save();
        res.send(`${name}'s account has been created.`);
      }
    });
  } catch (error) {
    res.send("Error while registering");
  }
});

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await RoleModel.find({ email });
    // console.log(user.length);

    const hashed_password = admin[0].password;
    if (admin.length > 0) {
      bcrypt.compare(password, hashed_password, function (err, result) {
        if (result) {
          const token = jwt.sign(
            { adminID: admin[0]._id, role: admin[0].role },
            "coder"
          );
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
  adminRouter,
};
