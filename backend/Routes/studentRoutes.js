const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
} = require("../Controllers/studentController");
const requireAuth = require("../middleware/requireAuth");

router.post("/create", requireAuth, createStudent);
router.post("/students", requireAuth, getStudents);

module.exports = router;
