const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: String,
  email: String,
  city: String,
  password: String,
});

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = { AdminModel };
