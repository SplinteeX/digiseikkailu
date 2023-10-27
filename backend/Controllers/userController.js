const User = require("../Models/userModel");
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
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
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
module.exports = {
  loginUser,
  signupUser,
  getUsers,
  getUserById,
};
