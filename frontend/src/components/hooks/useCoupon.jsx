import { useState } from "react";
import { toast } from "sonner";
export const useCoupon = () => {
  const [CouponError, setCouponError] = useState(null);
  const coupon = async (code) => {
    setCouponError(null);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/coupon/use`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ coupon: code }),
        }
      );
      const json = await response.json();
      if (localStorage.getItem("cart") != null) {
        toast.error("Kuponkikoodi jo käytetty!");
        return;
      }
      if (!response.ok) {
        setCouponError(json.error);
        toast.error(json.error);
      }
      if (response.ok) {
        toast.success("Kuponki on aktivoitu!");
        return json;
      }
    } catch (error) {
      setCouponError(error);
      throw error;
    }
  };
  return { coupon, CouponError };
};
