const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const couponSchema = new Schema({
  uses: {
    type: Number,
    required: true,
    unique: true,
  },
  coupon: {
    type: String,
    required: true,
    unique: true,
  },
  used: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Coupon", couponSchema);
