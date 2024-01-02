import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../css/shoppingCart.css";
import remove from "../../assets/remove-icon.png";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

const ShoppingCart = ({ Click }) => {
  const { cart, removeFromCart } = useShoppingCart();
  const [totalPrice, setTotalPrice] = useState("0.00");
  const navigate = useNavigate();

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      if (item.type === "subscription") {
        sum += parseFloat(item.price) * item.quantity * item.months;
      } else {
        sum += parseFloat(item.price) * item.quantity;
      }
    });
    setTotalPrice(sum.toFixed(2));
  }, [cart]);

  const handlePayment = () => {
    Click();
    navigate("/ostoskori", { state: { cartItems: cart } });
  };

  const truncateTitle = (title) => {
    if (title.length > 20) {
      return title.substring(0, 16) + "..";
    }
    return title;
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="Shopping-cart">
      <h2>Ostoskori</h2>
      <img src={remove} width={"25px"} height={"25px"} alt="" onClick={Click} />
      {cart.length === 0 ? (
        <p>Ostoskori on tyhjä!</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p>
                  {truncateTitle(item.title)} {item.price}€
                </p>
                <button onClick={() => handleRemove(item)}>Poista</button>
              </motion.li>
            ))}
          </ul>
          <p className="Total-price">
            Välisumma: {parseFloat(totalPrice).toFixed(2)}€
          </p>
          <p className="alv">Sisältää 10% alvin</p>
          <button className="Pay" onClick={handlePayment}>
            Siirry maksamaan!
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
