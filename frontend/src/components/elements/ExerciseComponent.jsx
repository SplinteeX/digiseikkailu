import React, { useState, useEffect } from "react";
import "../css/ExerciseComponent.css";
import { useNavigate } from "react-router-dom";
import { ApinmajaData } from "../data/ApinmajaData";
import TinyMCE from "./tinyMce";
import { PulseLoader } from "react-spinners";
import YoutubeVideo from "../elements/YoutubeVideo";

export const ExerciseComponent = ({ Data }) => {
  const [activeTab, setActiveTab] = useState("Tehtävä");
  const [RightTask, setRightTask] = useState(Data.vastaus);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const Tehtävät = ApinmajaData();

  useEffect(() => {
    setRightTask(Data.vastaus);
  }, [Data]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(tab);
  };
  const handleUnityLoad = () => {
    setLoading(false);
  };
  const handleNavigation = (direction) => {
    const currentIndex =
      parseInt(window.location.pathname.split("/").pop(), 10) || 0;
    const maxIndex = Tehtävät.length;
    let newIndex;

    if (direction === "next") {
      newIndex = currentIndex + 1;
      if (newIndex <= maxIndex) {
        setSelectedAnswer(null);
        navigate(`/apinmaja/${newIndex}`);
        window.scrollTo(0, 0);
      }
    } else if (direction === "previous") {
      newIndex = currentIndex - 1;
      if (newIndex >= 0) {
        setSelectedAnswer(null);
        navigate(`/apinmaja/${newIndex}`);
        window.scrollTo(0, 0);
      }
    }
  };
  const handleAnswerClick = (clickedAnswer) => {
    if (!selectedAnswer) {
      if (clickedAnswer === RightTask) {
        setSelectedAnswer("correct");
      } else {
        setSelectedAnswer("wrong");
        setTimeout(() => {
          setSelectedAnswer(null);
        }, 1500);
      }
    }
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
      {activeTab === "Tehtävä" && (
        <>
          <h3 className="White-text">
            {Data.tehtNum}. {Data.tehtName}
          </h3>
          {Data.puolTeksti && !Array.isArray(Data.puolTeksti) ? (
            <div className="TextImage">
              <p className="text50">{Data.puolTeksti}</p>
              {Data.puolKuva && (
                <img className="image50" src={Data.puolKuva} alt="Image" />
              )}
            </div>
          ) : null}
          {Data.puolTekstit &&
            Array.isArray(Data.puolTekstit) &&
            Data.puolTekstit.map((text, index) => (
              <div key={`text_${index}`} className="TextImages">
                <p className="text50s">{text}</p>
                {Data.puolKuvat && Data.puolKuvat.length > index && (
                  <img
                    className="image50s"
                    src={Data.puolKuvat[index]}
                    alt={`Image ${index}`}
                  />
                )}
              </div>
            ))}
          {Data.Kuva ? (
            <img className="Full-image" src={Data.Kuva} alt="" />
          ) : null}
          {Data.Kuvat &&
            Array.isArray(Data.Kuvat) &&
            Data.Kuvat.map((image, index) => (
              <img
                key={`image_${index}`}
                className="Full-image"
                src={image}
                alt={`Image ${index}`}
              />
            ))}
          <p className="White-text">{Data.smallTitle}</p>
          {Data.Tekstit &&
            Array.isArray(Data.Tekstit) &&
            Data.Tekstit.map((text, index) => (
              <div key={`text_${index}`} className="Text-div">
                <p className="Text">{text}</p>
              </div>
            ))}
          {Data.Teksti && <p className="Text">{Data.Teksti}</p>}
          {Data.numeroLista && (
            <div className="Numerolista">
              <ol>
                {Data.numeroLista.map((numero, index) => (
                  <li key={`numero_${index}`}>{numero}</li>
                ))}
              </ol>
            </div>
          )}
          {Data.youtube && <YoutubeVideo videoId={Data.youtube} />}
          {Data.peliTitle ? (
            <p className="White-text">{Data.peliTitle}</p>
          ) : null}
          <div className="Unity-loader-div">
            {loading && Data.unity ? (
              <div className="loader">
                <PulseLoader color="#123abc" loading={loading} size={15} />
              </div>
            ) : null}
            <div className="iframe-container">
              {Data.Unity ? (
                <iframe
                  className={`Unity custom-scrollbar`}
                  src={Data.Unity}
                  width="100%"
                  frameBorder="0"
                  scrolling="yes"
                  onLoad={handleUnityLoad}
                ></iframe>
              ) : null}
            </div>
          </div>
          {Data.TinyMCE && <TinyMCE text={Data.TinyMCE} />}
        </>
      )}
      {activeTab === "Kysely" && (
        <>
          <div className="Kysymys-title">
            <h3 className="White-text">
              {Data.tehtNum}. {Data.tehtName}
            </h3>
            <h3 className="White-text">{Data.kysymys}</h3>
          </div>
          {selectedAnswer === "correct" && (
            <p className="White-text">Oikein!</p>
          )}
          {selectedAnswer === "wrong" && <p className="White-text">Väärin!</p>}
          <div className="Kysymys-vaihtoehdot">
            {Data.vaihtoehdot.map((vaihtoehto, index) => (
              <div key={`vaihtoehto_${index}`} className={`Kysymys-vaihtoehto`}>
                <p
                  className={`Vaihtoehto ${
                    selectedAnswer === "correct"
                      ? "Correct-answer"
                      : selectedAnswer === "wrong"
                      ? "Wrong-answer"
                      : ""
                  }`}
                  onClick={() => handleAnswerClick(vaihtoehto)}
                >
                  {vaihtoehto}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="Control-buttons">
        <button
          onClick={() => handleNavigation("previous")}
          className="Control-button"
        >
          Edellinen
        </button>
        <button
          className="Control-button"
          onClick={() => handleNavigation("next")}
        >
          Seuraava
        </button>
      </div>
    </div>
  );
};
