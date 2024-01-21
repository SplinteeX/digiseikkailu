const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const couponSchema = new Schema({
  uses: {
    type: Number,
    required: true,
  },
  coupon: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: String,
    default: "percentage",
  },
  used: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Coupon", couponSchema);
