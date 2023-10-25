const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
} = require("../Controllers/studentController");
const requireAuth = require("../middleware/requireAuth");

router.post("/create", createStudent);
router.get("/students", requireAuth, getStudents);

module.exports = router;
