const Individual = require("../Models/individualUserModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const loginIndividual = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Individual.login(email, password);
    const role = user.role;
    const token = createToken(user._id);
    const { firstname, lastname, username } = user;
    res.status(200).json({
      user: { firstname, lastname, email, username, token, role },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
const signupIndividual = async (req, res) => {
  const { firstname, lastname, email, password, username } = req.body;
  try {
    const user = await Individual.signup({
      firstname,
      lastname,
      email,
      password,
      username,
    });
    const role = user.role;
    const token = createToken(user._id);
    res.status(200).json({
      user: { firstname, lastname, email, username, token, role },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getUserById = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await Individual.findById(id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { loginIndividual, signupIndividual, getUserById };
