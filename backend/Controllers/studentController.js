const Student = require("../Models/studentModel");
const jwt = require("jsonwebtoken");
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
const createStudent = async (req, res) => {
  const { name, username, teacherid } = req.body;
  try {
    if (!name || !username) {
      throw new Error("Täytä kaikki kentät!");
    }

    const newStudent = await Student.create({
      name,
      username,
      teacherid,
    });

    res.status(201).json({ newStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const loginStudent = async (req, res) => {
  const { username, teacherid } = req.body;
  try {
    const student = await Student.login({ username, teacherid }); // Call the static method correctly
    const role = student.role;
    const token = createToken(student._id);
    res.status(200).json({
      student: { username, token, role, teacherid },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getStudents = async (req, res) => {
  const { teacherid } = req.body;
  try {
    const rawstudents = await Student.find();
    const students = rawstudents.filter(
      (student) => student.teacherid === teacherid
    );
    res.status(200).json({ students });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createStudent,
  getStudents,
  loginStudent,
};
