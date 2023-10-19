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
    const token = createToken(user._id);
    const { firstname, lastname, userName, role } = user;
    res
      .status(200)
      .json({ user: { firstname, lastname, userName, role }, token });
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
    const token = createToken(user._id);
    res.status(200).json({ email, token });
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
module.exports = {
  loginUser,
  signupUser,
  getUsers,
};
