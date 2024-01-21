const express = require("express");
const router = express.Router();
const {
  loginIndividual,
  signupIndividual,
  getUserById,
} = require("../Controllers/individualController");

const requireAuth = require("../middleware/requireAuth");

router.post("/login", loginIndividual);
router.post("/signup", signupIndividual);
router.post("/user", requireAuth, getUserById);
module.exports = router;
