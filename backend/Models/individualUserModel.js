const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const individualUserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastonline: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    default: "Individual",
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
individualUserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  console.log(user);
  return user;
};

individualUserSchema.statics.signup = async function (userData) {
  const { firstname, lastname, email, password, username } = userData;

  // validation

  const Emailexists = await this.findOne({ email });
  const userExists = await this.findOne({ username });
  if (!validator.isEmail(email)) {
    throw Error("Virheellinen sähköposti");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Heikko salasana");
  }
  if (Emailexists) {
    throw Error("Sähköposti jo käytössä!");
  }
  if (userExists) {
    throw Error("Käyttäjänimi jo käytössä");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    firstname,
    lastname,
    email,
    password: hash,
    username,
  });

  return user;
};
module.exports = mongoose.model("Individual", individualUserSchema);
