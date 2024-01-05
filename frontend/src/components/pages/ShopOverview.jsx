import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { motion } from "framer-motion";
import "../css/ShopOverview.css";

export const ShopOverview = () => {
  const {
    cart,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    incrementCartItemMonths,
    decrementCartItemMonths,
    incrementCartItemTeachers,
    decrementCartItemTeachers,
  } = useShoppingCart();
  const [totalPrice, setTotalPrice] = useState("0.00");

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="ShopOverview">
      <>
        <h2>Ostoskori</h2>
        <ul>
          {cart.map((item, index) => (
            <motion.div
              className="Item"
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <li>
                <p>
                  {item.title}{" "}
                  {item.type === "subscription"
                    ? (item.price * item.quantity * item.months).toFixed(2)
                    : (item.price * item.quantity).toFixed(2)}
                  €
                </p>
              </li>
              <div className="Control-section">
                {item.title === "Opettaja" ||
                  (item.title === "Oppilaitos" && (
                    <div className="Control">
                      <button
                        onClick={() => incrementCartItemQuantity(item.id)}
                      >
                        +
                      </button>
                      <p>
                        {item.quantity}{" "}
                        {item.title === "Opettaja" && item.quantity === 1
                          ? "oppilas"
                          : "oppilasta"}
                      </p>
                      <button
                        onClick={() => decrementCartItemQuantity(item.id)}
                      >
                        -
                      </button>
                    </div>
                  ))}
                {item.title === "Oppilaitos" && (
                  <div className="Control">
                    <button onClick={() => incrementCartItemTeachers(item.id)}>
                      +
                    </button>
                    <p>
                      {item.teachers}{" "}
                      {item.teachers === 1 ? "opettaja" : "opettajaa"}
                    </p>
                    <button onClick={() => decrementCartItemTeachers(item.id)}>
                      -
                    </button>
                  </div>
                )}
                {item.title === "Opettaja" && (
                  <div className="Control">
                    <button onClick={() => incrementCartItemQuantity(item.id)}>
                      +
                    </button>
                    <p>
                      {item.quantity}{" "}
                      {item.title === "Opettaja" && item.quantity === 1
                        ? "oppilas"
                        : "oppilasta"}
                    </p>
                    <button onClick={() => decrementCartItemQuantity(item.id)}>
                      -
                    </button>
                  </div>
                )}
                {item.type === "Product" && (
                  <div className="Control">
                    <button onClick={() => incrementCartItemQuantity(item.id)}>
                      +
                    </button>
                    <p>{item.quantity} kpl</p>
                    <button onClick={() => decrementCartItemQuantity(item.id)}>
                      -
                    </button>
                  </div>
                )}
                {item.type === "subscription" && (
                  <div className="Control">
                    <button onClick={() => incrementCartItemMonths(item.id)}>
                      +
                    </button>
                    <p>
                      {item.months}{" "}
                      {item.months === 1 ? "kuukausi" : "kuukautta"}
                    </p>
                    <button onClick={() => decrementCartItemMonths(item.id)}>
                      -
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </ul>
        <div className="Bottom-section">
          <p className="Total">Summa: {totalPrice}€</p>
          <Link to={"/kassa"}>
            <button>Siirry Maksamaan!</button>
          </Link>
        </div>
      </>
    </div>
  );
};
