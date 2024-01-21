const express = require("express");

const {
  loginUser,
  signupUser,
  getUserById,
  getUser,
  saveCompletedExercise,
  retrieveCompletedExercises,
} = require("../Controllers/userController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/getUser", requireAuth, getUser);
router.post("/user", requireAuth, getUserById);
router.post("/save-exercise", requireAuth, saveCompletedExercise);
router.post("/retrieve-exercises", requireAuth, retrieveCompletedExercises);
module.exports = router;
