import React, { useState } from "react";
import "../css/ExerciseComponent.css";

export const ExerciseComponent = ({ Data }) => {
  const [activeTab, setActiveTab] = useState("Tehtävä");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(tab);
  };

  const getKategoriaClass = () => {
    switch (Data.Kategoria) {
      case "Apinmaja":
        return "Apinmaja-style";
      case "DogenBoxi":
        return "Dogen-boxi-style";
      case "HäsänStudio":
        return "hasan-studio-style";
      case "LaamanAitaus":
        return "laaman-aitaus-style";
      case "TweetynViestiseinä":
        return "tweetyn-viestiseina-style";
      case "KursorinUllakko":
        return "kursorin-ullakko-style";
      case "SirynÄlytalo":
        return "siryn-alytalo-style";
      case "MiukuMaukunKirjasto":
        return "miuku-maukun-kirjasto-style";
      default:
        return "";
    }
  };
  return (
    <div className={`Exercise ${getKategoriaClass()}`}>
      <div className="Section-buttons">
        <button
          onClick={() => handleTabClick("Tehtävä")}
          className={activeTab === "Tehtävä" ? "Active-button" : "not-active"}
        >
          Tehtävä
        </button>
        <button
          onClick={() => handleTabClick("Kysely")}
          className={activeTab === "Kysely" ? "Active-button" : "not-active"}
        >
          Kysely
        </button>
      </div>

      {/* Conditional rendering based on activeTab */}
      {activeTab === "Tehtävä" && (
        <>
          {/* Display exercise details */}
          <h3>
            {Data.tehtNum}. {Data.tehtName}
          </h3>
          {Data.puolTeksti ? (
            <div className="TextImage">
              <p className="text50">{Data.puolTeksti}</p>
              <img
                className="image50"
                src={Data.puolKuva}
                alt={Data.puolTitle}
              />
            </div>
          ) : null}
          {Data.Kuva ? (
            <img className="Full-image" src={Data.Kuva} alt="" />
          ) : null}
          <p>Pelaa täällä!</p>
        </>
      )}

      {/* Placeholder for Kysely tab */}
      {activeTab === "Kysely" && <></>}
    </div>
  );
};
