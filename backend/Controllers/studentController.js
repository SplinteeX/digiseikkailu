const Student = require("../Models/studentModel");

const createStudent = async (req, res) => {
  const { name, username, teacherid } = req.body;
  try {
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
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ students });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createStudent,
  getStudents,
};
