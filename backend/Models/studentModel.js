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
});
module.exports = mongoose.model("Student", studentSchema);
