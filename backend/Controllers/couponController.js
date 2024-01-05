const Coupon = require("../Models/couponModel");
const createCoupon = async (req, res) => {
  const { uses, coupon } = req.body;
  try {
    if (!uses || !coupon) {
      throw new Error("Täytä kaikki kentät!");
    }

    const newCoupon = await Coupon.create({
      uses,
      coupon,
    });

    res.status(201).json({ newCoupon });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const useCoupon = async (req, res) => {
  const { coupon } = req.body;
  try {
    if (!coupon) {
      throw new Error("Väärä kuponkikoodi!");
    }

    const coupon = await Coupon.findOne({ coupon });
    if (!coupon) {
      throw Error("Incorrect coupon");
    }

    const coupon_id = coupon._id;
    console.log(coupon_id);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getCoupon = async (req, res) => {
  const id = req.params.id;
  try {
    const coupon = await Coupon.findById(id);
    res.status(200).json({ coupon });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createCoupon,
  getCoupon,
  useCoupon,
};
