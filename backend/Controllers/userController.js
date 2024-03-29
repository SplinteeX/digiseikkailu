const User = require("../Models/userModel");
const Student = require("../Models/studentModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const role = user.role;
    const teacherid = user.teacherId;
    const token = createToken(user._id);
    const { firstname, lastname, userName } = user;
    res.status(200).json({
      user: { firstname, lastname, email, userName, token, role, teacherid },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { firstname, lastname, email, password, userName } = req.body;
  try {
    const user = await User.signup({
      firstname,
      lastname,
      email,
      password,
      userName,
    });
    const role = user.role;
    const teacherid = user.teacherId;
    const token = createToken(user._id);
    res.status(200).json({
      user: { firstname, lastname, email, userName, token, role, teacherid },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findById(id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getUser = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    const user =
      (await User.findOne({ _id })) || (await Student.findOne({ _id }));
    res.status(200).json({ user });
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return;
  }
};
module.exports = {
  loginUser,
  signupUser,
  getUserById,
  getUser,
};
