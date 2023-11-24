import React, { useState } from "react";
import { SimpleButton } from "../elements/SimpleButton";
import "../css/Products.css";
import { ProductsData } from "../data/ProductsData";
import checkmark from "../../assets/check-mark.png";

export const Products = () => {
  const { Oppilaitos, Yksityishenkilö, Kokeile } = ProductsData();
  const [activeButton, setActiveButton] = useState("Oppilaitos");

  const handleClick = (text) => {
    setActiveButton(text);
  };

  return (
    <div className="Products">
      <div className="Add-to-cart">
        {activeButton === "Oppilaitos" && (
          <SimpleButton
            text={"9,90€ / kk. per oppilas"}
            active={activeButton}
          ></SimpleButton>
        )}
        {activeButton === "Yksityishenkilö" && (
          <SimpleButton
            style={"Normal"}
            text={"9,90€ / kk"}
            active={activeButton}
          ></SimpleButton>
        )}
        {activeButton === "Kokeile" && (
          <SimpleButton
            text={"Kokeile nyt!"}
            active={activeButton}
          ></SimpleButton>
        )}
      </div>
      <header>
        <SimpleButton
          text={"Oppilaitos"}
          onClick={() => handleClick("Oppilaitos")}
          active={activeButton === "Oppilaitos"}
        ></SimpleButton>
        <SimpleButton
          text={"Yksityishenkilö"}
          onClick={() => handleClick("Yksityishenkilö")}
          active={activeButton === "Yksityishenkilö"}
        ></SimpleButton>
        <SimpleButton
          text={"Kokeile"}
          onClick={() => handleClick("Kokeile")}
          active={activeButton === "Kokeile"}
        ></SimpleButton>
      </header>
      <div className="Products-content">
        {(activeButton === "Yksityishenkilö" ||
          activeButton === "Kokeile" ||
          activeButton === "Oppilaitos") && (
          <div>
            {activeButton === "Yksityishenkilö" && (
              <>
                <h1>Sisältää yhden tilin jolla oikeudet seuraaviin asioihin</h1>
                <div className="Product-boxes">
                  {Yksityishenkilö.map((product, index) => (
                    <div key={index} className="Products-box">
                      <h3>{product.title}</h3>
                      {product.img && (
                        <img src={product.img} alt={product.title} />
                      )}
                      <p>{product.description}</p>
                      {product.ominaisuudet && (
                        <div className="Properties">
                          {product.ominaisuudet.split(",").map((feature, i) => (
                            <div className="Properties-child">
                              <img src={checkmark} alt="" />
                              <p className="Properties" key={i}>
                                {feature.trim()}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeButton === "Kokeile" && (
              <>
                <h1>Kokeilujakso sisältää mainoksia.</h1>
                <div className="Product-boxes">
                  {Kokeile.map((product, index) => (
                    <div key={index} className="Products-box">
                      <h3>{product.title}</h3>
                      {product.img && (
                        <img src={product.img} alt={product.title} />
                      )}
                      <p>{product.description}</p>
                      {product.ominaisuudet && (
                        <div className="Properties">
                          {product.ominaisuudet.split(",").map((feature, i) => (
                            <div className="Properties-child">
                              <img src={checkmark} alt="" />
                              <p className="Properties" key={i}>
                                {feature.trim()}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeButton === "Oppilaitos" && (
              <>
                <h1>Sisältää materiaalit koko oppilaitokselle</h1>
                <div className="Product-boxes">
                  {Oppilaitos.map((product, index) => (
                    <div key={index} className="Products-box">
                      <h3>{product.title}</h3>
                      {product.img && (
                        <img src={product.img} alt={product.title} />
                      )}
                      <p>{product.description}</p>
                      {product.ominaisuudet && (
                        <div className="Properties">
                          {product.ominaisuudet.split(",").map((feature, i) => (
                            <div className="Properties-child">
                              <img src={checkmark} alt="" />
                              <p className="Properties" key={i}>
                                {feature.trim()}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
