const express = require("express");

const { connection } = require("./configs/db");
const { adminRouter } = require("./routes/admin.route");
const { userRouter } = require("./routes/user.route");
const {
  authenticate_admin,
  authenticate_user,
} = require("./middlewares/user.authenticate");
const { productRouter } = require("./routes/product.route");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();
const mongoose = require("mongoose");

// app.use("/admins", adminRouter);
// app.use(authenticate_admin);
// app.use("/products", productRouter);

app.use("/users", userRouter);
app.use(authenticate_user);
app.get("/", (req, res) => {
  res.send("working fine");
  console.log("hello hunny");
});

// app.use("/homepage_or_cart",cartRouter)

app.listen(1050, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log("trouble connecting to db");
    console.log(error);
  }
  console.log(`running at 1050`);
});
