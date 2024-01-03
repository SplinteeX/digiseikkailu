import { useState } from "react";
import "../css/Kassa.css";
import Input from "../elements/input";

export const Kassa = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [loggingSkipped, setLoggingSkipped] = useState(false);

  const handleNext = () => {
    if (currentSection === 1) {
      setLoggingSkipped(true);
    }
    setCurrentSection((prevSection) => prevSection + 1);
    console.log(loggingSkipped);
  };

  const handlePrevious = () => {
    setCurrentSection((prevSection) => prevSection - 1);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div className="section">
            <h2>Kirjaudu</h2>
            <p>
              Jos olet tehnyt ostoksia meillä aiemmin, kirjoita tietosi alla
              oleviin kenttiin. Jos olet uusi asiakas, siirry Laskutus ja
              toimitus -osioon.
            </p>
            <div className="Login">
              <Input className="Login" text="Sähköposti" type="email" />
              <Input className="Login" text="Salasana" type="password" />
            </div>
            <button>Kirjaudu</button>
          </div>
        );
      case 2:
        return (
          <div className="section">
            <h2>Laskutus</h2>
          </div>
        );
      case 3:
        return (
          <div className="section">
            <h2>Toimitus</h2>
          </div>
        );
      case 4:
        return (
          <div className="section">
            <h2>Tilaus</h2>
          </div>
        );
      case 5:
        return (
          <div className="section">
            <h2>Maksu</h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="Kassa">
      <div className="Left-side"></div>
      <div className="Right-side">
        {renderSection()}
        <div className="Buttons">
          <button
            className="Button-1"
            disabled={currentSection === 1}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="Button-2"
            disabled={currentSection === 5}
            onClick={handleNext}
          >
            {currentSection === 1 ? "Ohita kirjautuminen" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};
