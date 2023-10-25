const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
  loginStudent,
} = require("../Controllers/studentController");
const requireAuth = require("../middleware/requireAuth");

router.post("/create", requireAuth, createStudent);
router.post("/students", requireAuth, getStudents);
router.post("/login", loginStudent);

module.exports = router;
