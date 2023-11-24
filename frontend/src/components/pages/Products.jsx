import React, { useState } from "react";
import { SimpleButton } from "../elements/SimpleButton";
import "../css/Products.css";
import { ProductsData } from "../data/ProductsData";
import checkmark from "../../assets/check-mark.png";
import x from "../../assets/x.png";

export const Products = () => {
  const { Oppilaitos, Yksityishenkilö, Kokeile } = ProductsData();
  const [activeButton, setActiveButton] = useState("Oppilaitos");

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

  const buttons = [
    { text: "Oppilaitos", data: Oppilaitos },
    { text: "Yksityishenkilö", data: Yksityishenkilö },
    { text: "Kokeile", data: Kokeile },
  ];

  return (
    <div className="Products">
      <div className="Add-to-cart">
        {activeButton === "Oppilaitos" && (
          <SimpleButton
            text={"9,90€ / kk. per oppilas"}
            active={activeButton}
          />
        )}
        {activeButton === "Yksityishenkilö" && (
          <SimpleButton
            text={"9,90€ / kk"}
            active={activeButton}
            style={"Normal"}
          />
        )}
        {activeButton === "Kokeile" && (
          <SimpleButton text={"Kokeile nyt!"} active={activeButton} />
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
