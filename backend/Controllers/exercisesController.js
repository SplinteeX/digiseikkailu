const User = require("../Models/userModel");
const Student = require("../Models/studentModel");
async function saveCompletedExercise(req, res) {
  const { id, exerciseIdentifier, exerciseCategory } = req.body;
  try {
    const user = (await User.findById(id)) || (await Student.findById(id));
    const completedExercises = user.completedExercises;

    if (completedExercises[exerciseCategory].includes(exerciseIdentifier)) {
      return res.status(400).json({ error: "Exercise already completed" });
    }
    completedExercises[exerciseCategory].push(exerciseIdentifier);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function retrieveCompletedExercises(req, res) {
  const { id } = req.body;
  try {
    const user = (await User.findById(id)) || (await Student.findById(id));
    const completedExercises = user.completedExercises;
    res.status(200).json({ completedExercises });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
}
module.exports = { saveCompletedExercise, retrieveCompletedExercises };
