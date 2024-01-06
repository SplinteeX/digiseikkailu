import React, { useState } from "react";
import { SimpleButton } from "../elements/SimpleButton";
import "../css/Products.css";
import { ProductsData } from "../data/ProductsData";
import checkmark from "../../assets/check-mark.png";
import x from "../../assets/x.png";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { Toaster, toast } from "sonner";

export const Products = () => {
  const { Oppilaitos, Yksityishenkilö, Opettaja } = ProductsData();
  const [activeButton, setActiveButton] = useState("Opettaja");
  const { cart, addToCart } = useShoppingCart();

  const handleClick = (text) => setActiveButton(text);

  const renderFeatures = (features, icon) => (
    <div className="Properties">
      {features.split(",").map((feature, i) => (
        <div className="Properties-child" key={i}>
          <img src={icon} alt="" />
          <p className="Properties">{feature.trim()}</p>
        </div>
      ))}
    </div>
  );

  const handleSpecialButton = (product) => {
    addToCart({ title: product.title, price: product.price });
  };

  const buttons = [
    { text: "Opettaja", data: Opettaja },
    { text: "Oppilaitos", data: Oppilaitos },
    { text: "Yksityishenkilö", data: Yksityishenkilö },
  ];

  const renderProducts = (products, title) => (
    <>
      <h1>{title}</h1>
      <div className="Product-boxes">
        {products.map((product, index) => (
          <div key={index} className="Products-box">
            <h3>{product.title}</h3>
            {product.img && <img src={product.img} alt={product.title} />}
            <p>{product.description}</p>
            {product.ominaisuudet &&
              renderFeatures(product.ominaisuudet, checkmark)}
            {product.notIncluded && renderFeatures(product.notIncluded, x)}
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="Products">
      <div className="Add-to-cart">
        {activeButton === "Opettaja" && (
          <SimpleButton
            text={"1.49€ / kk. per oppilas"}
            active={activeButton}
            onClick={() =>
              addToCart({
                title: "Opettaja",
                price: "1.49",
                type: "subscription",
              })
            }
          />
        )}
        {activeButton === "Yksityishenkilö" && (
          <SimpleButton
            text={"3,90€ / kk"}
            active={activeButton}
            style={"Normal"}
            onClick={() =>
              toast.error("Tämä ominaisuus ei ole vielä saatavilla.")
            }
          />
        )}
        {activeButton === "Oppilaitos" && (
          <SimpleButton
            text={"1.49€ / kk. per oppilas"}
            active={activeButton}
            style={"Normal"}
            onClick={() =>
              toast.error("Tämä ominaisuus ei ole vielä saatavilla.")
            }
          />
        )}
      </div>
      <header>
        {buttons.map((button, index) => (
          <SimpleButton
            key={index}
            text={button.text}
            onClick={() => handleClick(button.text)}
            active={activeButton === button.text}
          />
        ))}
      </header>
      <div className="Products-content">
        {activeButton === "Opettaja" &&
          renderProducts(Opettaja, "Sisältää materiaalit opettajalle")}
        {activeButton === "Oppilaitos" &&
          renderProducts(
            Oppilaitos,
            "Sisältää materiaalit koko oppilaitokselle"
          )}
        {activeButton === "Yksityishenkilö" &&
          renderProducts(
            Yksityishenkilö,
            "Sisältää yhden tilin jolla oikeudet seuraaviin asioihin"
          )}
        {activeButton === "Kokeile" &&
          renderProducts(Kokeile, "Kokeilujakso sisältää mainoksia.")}
      </div>
    </div>
  );
};
