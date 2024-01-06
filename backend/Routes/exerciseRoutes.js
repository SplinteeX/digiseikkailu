const express = require("express");
const {
  saveCompletedExercise,
  retrieveCompletedExercises,
} = require("../Controllers/exercisesController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
router.post("/save-exercise", requireAuth, saveCompletedExercise);
router.post("/retrieve-exercises", requireAuth, retrieveCompletedExercises);
module.exports = router;
