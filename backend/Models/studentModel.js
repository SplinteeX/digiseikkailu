const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  teacherid: {
    type: String,
  },
  lastonline: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    default: "Student",
  },
  completedExercises: {
    Apinmaja: [String],
    DogenBoxi: [String],
    HäsänStudio: [String],
    KursorinUllakko: [String],
    MiukuMaukunKirjasto: [String],
    OhjelmointiPolku: [String],
    TweetynViestiseinä: [String],
    SirynÄlytalo: [String],
    LaamanAitaus: [String],
  },
});
studentSchema.statics.login = async function (studentData) {
  const { username, teacherid } = studentData;
  if (!username || !teacherid) {
    throw Error("All fields must be filled");
  }

  const student = await this.findOne({ username, teacherid });
  if (!student) {
    throw Error("Incorrect username");
  }

  return student;
};
module.exports = mongoose.model("Student", studentSchema);
