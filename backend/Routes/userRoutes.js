const express = require("express");

const {
  loginUser,
  signupUser,
  getUsers,
  getUserById,
  getUser,
} = require("../Controllers/userController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/getUser", getUser);
router.get("/users", requireAuth, getUsers);
router.post("/user", requireAuth, getUserById);
module.exports = router;
