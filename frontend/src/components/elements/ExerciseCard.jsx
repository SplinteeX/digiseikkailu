import React, { useState } from "react";
import "../css/exerciseCard.css";
import { Link } from "react-router-dom";

export const ExerciseCard = ({ Data, Flipped, handleCardFlip }) => {
  return (
    <div
      className={`Exercise-card ${Flipped ? "is-flipped" : ""}`}
      onClick={handleCardFlip}
    >
      {!Flipped && (
        <div className="Inner-section">
          <div className="Card-front">
            <img src={Data.Image} alt="" />
            <div className="Text-section">
              <h3>{Data.Title}</h3>
              <h3>{Data.Time}</h3>
              <Link to={Data.Link}>
                <button className="Aloita-nappi">Aloita</button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {Flipped && (
        <div className="Card-back">
          <p>Back of the card content</p>
        </div>
      )}
    </div>
  );
};
