import React, { useState, useEffect } from "react";
import "../css/shoppingCart.css";
import remove from "../../assets/remove-icon.png";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

const ShoppingCart = ({ Click }) => {
  const { cart, removeFromCart } = useShoppingCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += parseFloat(item.price);
    });
    setTotalPrice(parseFloat(sum.toFixed(2)));
  }, [cart]);

  const handlePayment = () => {
    Click();
    navigate("/ostoskori", { state: { cartItems: cart } });
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
              <li key={index}>
                <p>
                  {item.title} {item.price}€
                </p>
                <button onClick={() => removeFromCart(item)}>Poista</button>
              </li>
            ))}
          </ul>
          <p className="Total-price">Välisumma: {totalPrice}€</p>
          <button className="Pay" onClick={handlePayment}>
            Siirry maksamaan!
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
