import React from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
export const Ostoskori = () => {
  const { cart, removeFromCart } = useShoppingCart();

  return (
    <div className="Ostoskori">
      <h2>Ostoskori</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <p>
              {item.title} {item.price}€
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
