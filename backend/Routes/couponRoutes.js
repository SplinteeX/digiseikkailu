const express = require("express");
const router = express.Router();

const {
  createCoupon,
  useCoupon,
  getCoupon,
} = require("../Controllers/couponController");
const requireAuth = require("../middleware/requireAuth");

router.post("/create", createCoupon);
router.get("/coupon/:id", getCoupon);
router.put("/use", useCoupon);

module.exports = router;
