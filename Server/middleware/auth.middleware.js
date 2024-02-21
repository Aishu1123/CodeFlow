const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
const { blackListTokenModel } = require("../models/blacklist.model");

const auth = async (req, res, next) => {
  
    const token = req.headers.authorization?.split(" ")[1];
  
  if (await blackListTokenModel.findOne({ token })) {
    return res.json({ msg: "You have been logged out again" });
  }
  if (token) {
    try {
      const decoded = jwt.verify(token, "codeflow");
      console.log(decoded);
      const { userID } = decoded;
      const user = await UserModel.findOne({ _id: userID });
      const required_role = user?.role; 
      req.role = required_role; 
      next();
    } catch (err) {
      res.status(400).json({ msg: "You Don't have token" });
      console.log(err);
    }
  } else {
    res.json({ msg: "Please Login " });
  }
};


module.exports = {
  auth
};