require("dotenv").config();
const jwt = require("jasonwebtoken");

const verifyToken = (req, res, next) => {
  const {} = req.headers["x-auth-token"];

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      req.user = payload;
      next();
    }
  });
};
module.exports = verifyToken;
