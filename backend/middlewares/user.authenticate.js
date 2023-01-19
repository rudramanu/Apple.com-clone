const jwt = require("jsonwebtoken");

const authenticate_admin = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const decoded = jwt.verify(token, "coder");
    console.log("decoded_new:", decoded);
    if (decoded) {
      const adminID = decoded.adminID;
      req.body.adminID = adminID;
      if (decoded.role == "admin") {
        console.log("1122334455");
        next();
      }
    } else {
      console.log("hahahaha");
      return res.send("You are not authorized");
    }
  } else {
    res.send("You are not authorized");
  }
};

const authenticate_user = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const decoded = jwt.verify(token, "coder");
    console.log("decoded:", decoded);
    if (decoded) {
      const userID = decoded.userID;
      req.body.userID = userID;
      if (decoded.role == "user") {
        console.log("101010");
        next();
      }
    } else {
      return res.send("Please login first");
    }
  } else {
    res.send("Please login first");
  }
};

module.exports = {
  authenticate_admin,
  authenticate_user,
};
