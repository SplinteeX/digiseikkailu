import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import "../css/ShopOverview.css";
import Input from "../elements/input";
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
  const [handlePaymentSection, setHandlePaymentSection] = useState(false);

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

  const handlePaymentClick = () => {
    setHandlePaymentSection(!handlePaymentSection);
  };
  return (
    <div className="ShopOverview">
      {!handlePaymentSection ? (
        <>
          <h2>Ostoskori</h2>
          <ul>
            {cart.map((item, index) => (
              <div className="Item" key={index}>
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
                      <>
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
                      </>
                    ))}
                  {item.title === "Oppilaitos" && (
                    <>
                      <button
                        onClick={() => incrementCartItemTeachers(item.id)}
                      >
                        +
                      </button>
                      <p>
                        {item.teachers}{" "}
                        {item.teachers === 1 ? "opettaja" : "opettajaa"}
                      </p>
                      <button
                        onClick={() => decrementCartItemTeachers(item.id)}
                      >
                        -
                      </button>
                    </>
                  )}
                  {item.title === "Opettaja" && (
                    <>
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
                    </>
                  )}
                  {item.type === "Product" && (
                    <>
                      <button
                        onClick={() => incrementCartItemQuantity(item.id)}
                      >
                        +
                      </button>
                      <p>{item.quantity} kpl</p>
                      <button
                        onClick={() => decrementCartItemQuantity(item.id)}
                      >
                        -
                      </button>
                    </>
                  )}
                  {item.type === "subscription" && (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            ))}
          </ul>
        </>
      ) : (
        <div className="PaySection">
          <h2>Maksu</h2>
          <div className="Upper-section">
            <p>Laskutustiedot</p>
            <Input text="Etunimi" />
            <Input text="Sukunimi" />
            <Input text="Sähköposti" />
            <Input text="Puhelinnumero" />
            <Input text="Osoite" />
          </div>
        </div>
      )}
      <div className="Bottom-section">
        <p className="Total">Summa: {totalPrice}€</p>
        <button onClick={handlePaymentClick}>
          Siirry {handlePaymentSection ? "ostoskoriin" : "maksamaan"}!
        </button>
      </div>
    </div>
  );
};
