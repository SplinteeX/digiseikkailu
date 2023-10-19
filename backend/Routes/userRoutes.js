const express = require("express");

const {
  loginUser,
  signupUser,
  getUsers,
} = require("../Controllers/userController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/users", requireAuth, getUsers);
module.exports = router;
