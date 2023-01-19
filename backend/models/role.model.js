const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  name: String,
  gender: String,
  email: String,
  city: String,
  password: String,
  role: String,
});

const RoleModel = mongoose.model("alluser", roleSchema);

module.exports = { RoleModel };
