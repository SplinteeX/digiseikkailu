const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
  loginStudent,
  deleteStudent,
} = require("../Controllers/studentController");
const requireAuth = require("../middleware/requireAuth");

router.post("/create", requireAuth, createStudent);
router.post("/students", requireAuth, getStudents);
router.post("/login", loginStudent);
router.delete("/delete/:id", requireAuth, deleteStudent);

module.exports = router;
