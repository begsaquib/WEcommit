const jwt = require("jsonwebtoken");
const User = require("../models/User");
const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    // const { token } = req.cookies;

    if (!token) {
      throw new Error("token not found!!!");
    }
    const decodedobj = await jwt.verify(token, "Saquib@123");

    const { _id } = decodedobj;

    const user = await User.findById(_id);

    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
};

module.exports = { userAuth };
