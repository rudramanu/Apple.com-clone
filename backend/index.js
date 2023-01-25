const express = require("express");

const { connection } = require("./configs/db");
const { adminRouter } = require("./routes/admin.route");
const { userRouter } = require("./routes/user.route");
const { productRouter } = require("./routes/product.route");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const { cartRouter } = require("./routes/cart.route");
const { homepageRouter } = require("./routes/homepage.route");

app.use("/homepage", homepageRouter);
app.use("/users", userRouter);
app.use("/cart", cartRouter);

app.use("/admins", adminRouter);
app.use("/products", productRouter);

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
