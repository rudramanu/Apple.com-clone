const express = require("express");

const { connection } = require("./configs/db");
const { adminRouter } = require("./routes/admin.route");

const { authenticate_admin } = require("./middlewares/admin.authenticate");

const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admins", adminRouter);
app.use(authenticate_admin);
app.use("/get", (req, res) => {
  res.send("hi");
  console.log("hello");
});

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
