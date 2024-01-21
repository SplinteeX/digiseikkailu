import React from "react";
import "../css/product.css";
import { Dropdown } from "./dropdown";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

export const Product = ({ Data, Text }) => {
  const { addToCart } = useShoppingCart();

  const handleAddToCart = () => {
    const item = {
      title: Data.title,
      price: Data.price,
      type: "Product",
    };
    addToCart(item);
  };

  return (
    <div className="Product">
      <h2>{Data.title}</h2>
      <div className="Header">
        <div className="Left-side">
          <img src={Data.img} alt="" />
        </div>
        <div className="Right-side">
          <p>{Data.smallDescription}</p>
        </div>
      </div>
      <div className="Body">
        <p>{Data.description}</p>
      </div>
      <div className="Dropdown-bottom">
        <Dropdown Text={Text} Data={Data.language} />
        <button onClick={handleAddToCart}>Lisää ostoskoriin</button>
      </div>
    </div>
  );
};
