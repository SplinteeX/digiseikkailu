const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Response", ResponseSchema);
