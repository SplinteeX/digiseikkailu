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
      throw new Error("Täytä kaikki kentät!");
    }

    const updatedCoupon = await Coupon.findOneAndUpdate(
      { coupon, uses: { $gt: 0 } },
      { $inc: { uses: -1 } },
      { new: true }
    );

    if (!updatedCoupon) {
      throw new Error("Kuponkia ei löytynyt tai sitä ei voi käyttää!");
    }

    if (updatedCoupon.uses === 0) {
      updatedCoupon.used = true;
      await updatedCoupon.save();
      throw new Error("Kuponki on jo käytetty!");
    }

    res.status(201).json({ usedCoupon: updatedCoupon });
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
