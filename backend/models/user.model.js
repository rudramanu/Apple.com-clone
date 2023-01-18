const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  gender: String,
  email: String,
  address: String,
  password: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
