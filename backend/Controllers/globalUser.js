const User = require("../Models/userModel");
const Student = require("../Models/studentModel");
const jwt = require("jsonwebtoken");
const getUser = async (req, res) => {
  const { authorization } = req.headers;
  console.log("Authorization: " + authorization);
  console.log(req.headers);
  console.log(authorization);
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];
  console.log(token);

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    console.log(_id);
    const user =
      (await User.findOne({ _id })) || (await Student.findOne({ _id }));
    console.log(user);
    res.status(200).json({ user });
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return;
  }
};
module.exports = { getUser };
