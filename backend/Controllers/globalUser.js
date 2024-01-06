const User = require("../Models/userModel");
const Student = require("../Models/studentModel");
const individual = require("../Models/individualUserModel");
const jwt = require("jsonwebtoken");
const getUser = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    const user =
      (await User.findOne({ _id })) ||
      (await Student.findOne({ _id })) ||
      (await individual.findOne({ _id }));
    res.status(200).json({ user });
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return;
  }
};
module.exports = { getUser };
