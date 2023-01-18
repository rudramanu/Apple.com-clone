const jwt = require("jsonwebtoken");

const authenticate_admin = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const decoded = jwt.verify(token, "coder");
    console.log("decoded:", decoded);
    if (decoded) {
      const adminID = decoded.adminID;
      req.body.adminID = adminID;
      // console.log("testing", req.body);
      next();
    } else {
      res.send("please login first");
    }
  } else {
    res.send("please login first");
  }
};

module.exports = {
  authenticate_admin,
};
