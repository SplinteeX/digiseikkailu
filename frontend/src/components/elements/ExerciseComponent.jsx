import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/ExerciseComponent.css";
import "../css/trolliKommentoimassa.css";
import { useNavigate } from "react-router-dom";
import TinyMCE from "./tinyMce";
import { PulseLoader } from "react-spinners";
import YoutubeVideo from "../elements/YoutubeVideo";
import { SoundCloud } from "./soundCloud";
import CommonButton from "./commonButton";
import { useSaveCompletedExercise } from "../hooks/useSaveCompletedExercise";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRetrieveExercises } from "../hooks/useRetrieveExercises";
import { toast } from "sonner";

export const ExerciseComponent = ({ Data, Tehtävät, url }) => {
  const [activeTab, setActiveTab] = useState("Tehtävä");
  const [RightTask, setRightTask] = useState(Data.vastaus);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [completedExercise, setCompletedExercise] = useState(false);
  const [loading, setLoading] = useState(null);
  const { SaveCompletedExercise } = useSaveCompletedExercise();
  const { RetrieveExercises } = useRetrieveExercises();
  const { user } = useAuthContext();

  const navigate = useNavigate();
  const parsedUser = JSON.parse(user);
  const fetchData = async (Data) => {
    if (!parsedUser) return;
    try {
      const exercises = await RetrieveExercises(parsedUser._id);
      console.log(Data.Kategoria, exercises.completedExercises[Data.Kategoria]);
      console.log(Data.tehtNum);
      const arrayContainsOne = exercises.completedExercises[
        Data.Kategoria
      ].some((item) => item === Data.tehtNum);
      if (arrayContainsOne) {
        setCompletedExercise(true);
      } else {
        setCompletedExercise(false);
      }
    } catch (error) {
      console.error("Error parsing user or retrieving exercises:", error);
    }
  };

  useEffect(() => {
    fetchData(Data);
    setRightTask(Data.vastaus);
  }, [Data]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
        navigate(`/tehtävät/${url}/${newIndex}`);
        window.scrollTo(0, 0);
        setActiveTab("Tehtävä");
      }
    } else if (direction === "previous") {
      newIndex = currentIndex - 1;
      if (newIndex > 0) {
        setSelectedAnswer(null);
        navigate(`/tehtävät/${url}/${newIndex}`);
        window.scrollTo(0, 0);
        setActiveTab("Tehtävä");
      }
    }
  };
  const handleAnswerClick = (clickedAnswer) => {
    if (!selectedAnswer) {
      if (clickedAnswer === RightTask) {
        setSelectedAnswer("correct");
        toast.success("Oikein!");
        {
          user &&
            SaveCompletedExercise(parsedUser._id, Data.tehtNum, Data.Kategoria);
        }
      } else {
        setSelectedAnswer("wrong");
        toast.error("Väärin!");
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
      case "OhjelmointiPolku":
        return "ohjelmointi-polku-style";
      case "EmpatiaPolku":
        return "empatia-polku-style";
      case "TrolliKommentoimassa":
        return "trolli-kommentoimassa-style";

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
        {Data.kysymys && (
          <button
            onClick={() => handleTabClick("Kysely")}
            className={activeTab === "Kysely" ? "Active-button" : "not-active"}
          >
            Kysely
          </button>
        )}
      </div>
      {activeTab === "Tehtävä" && (
        <>
          {Data.SoundCloud && <SoundCloud url={Data.SoundCloud} />}
          {Data.SoundClouds && Array.isArray(Data.SoundClouds) && (
            <>
              {Data.SoundClouds.map((url, index) => (
                <SoundCloud key={`soundcloud_${index}`} url={url} />
              ))}
            </>
          )}
          <h3 className="White-text">
            {Data.tehtNum}. {Data.tehtName}
          </h3>
          {Data.mp4 && (
            <div className="Video-container">
              <p className="White-text">{Data.mp4Teksti}</p>

              <video
                className="Video"
                src={Data.mp4}
                width={"100%"}
                controls
                autoPlay
                muted
              ></video>
            </div>
          )}

          {Data.blueTitle && (
            <>
              <p className="Blue-text">{Data.blueTitle}</p>
              {Data.blueInfo && <p className="White-text">{Data.blueInfo}</p>}
              {Data.blueImage && (
                <div className="Image-container">
                  <img
                    className="Full-image"
                    src={Data.blueImage}
                    alt="Blue image"
                  />
                </div>
              )}
            </>
          )}
          {Data.postit && (
            <>
              <p className="White-text">{Data.postitTeksti}</p>
              {Data.postit.map((posti, index) => (
                <div key={`posti_${index}`} className="Posti-div">
                  <img src={posti} alt={`Image_${index}`} />
                </div>
              ))}
            </>
          )}
          {Data.puolvideo && (
            <>
              <div className="Video-container">
                <p className="White-text">{Data.puolTeksti}</p>
                <video
                  className="Video"
                  src={Data.puolvideo}
                  width={"50%"}
                  controls
                  autoPlay
                  muted
                ></video>
              </div>

              {Data.puolTekstiVideo && (
                <>
                  <div className="Text-div">
                    <p className="White-text">{Data.puolTekstiVideo}</p>
                  </div>
                  <div className="Image-container">
                    <img
                      className="image25"
                      src={Data.puolKuvaVideo}
                      alt="Image"
                    />
                  </div>
                  <div className="Text-div">
                    <p className="White-text">{Data.tehtäväTekstiVideo}</p>
                  </div>
                </>
              )}
            </>
          )}
          {Data.youtube && <YoutubeVideo videoId={Data.youtube} />}
          {Data.puolTeksti && !Array.isArray(Data.puolTeksti) ? (
            <div className="TextImage">
              <p className="text50">
                {Data.puolTeksti.split("\n").map((text, index) => (
                  <React.Fragment key={index}>
                    {text}
                    {index !== Data.puolTeksti.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              {Data.puolKuva && (
                <div className="Image-container">
                  <img className="image50" src={Data.puolKuva} alt="Image" />
                </div>
              )}
            </div>
          ) : null}
          {Data.puolTekstit &&
            Array.isArray(Data.puolTekstit) &&
            Data.puolTekstit.map((text, index) => (
              <div key={`text_${index}`} className="TextImages">
                <div className="Text-50-container">
                  <p className="text50s">
                    {text.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index !== text.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                {Data.puolKuvat && Data.puolKuvat.length > index && (
                  <div className="Image-container">
                    <img
                      className="image50s"
                      src={Data.puolKuvat[index]}
                      alt={`Image ${index}`}
                    />
                  </div>
                )}
              </div>
            ))}
          {Data.nappiTitle && <p className="White-text">{Data.nappiTitle}</p>}
          {Data.kuvaTitle && <p className="White-text">{Data.kuvaTitle}</p>}
          {Data.puhelimet && (
            <div className="puhelimet">
              {Data.puhelimet.map((puhelin, index) => (
                <div className="Puhelin-div">
                  <img src={puhelin} alt={`Image_${index}`} />
                </div>
              ))}
            </div>
          )}
          {Data.Kuva ? (
            <div className="Full-image-container">
              <img className="Full-image" src={Data.Kuva} alt="" />
            </div>
          ) : null}
          {Data.Kuvat &&
            Array.isArray(Data.Kuvat) &&
            Data.Kuvat.map((image, index) => (
              <div className="Full-image-container">
                <img
                  key={`image_${index}`}
                  className="Full-image"
                  src={image}
                  alt={`Image ${index}`}
                />
              </div>
            ))}

          {Data.smallTitle && <p className="White-text">{Data.smallTitle}</p>}
          {Data.sininenNappi && (
            <div className="Sininen-nappi">
              <Link to={Data.buttonLink}>
                <button className="Blue-button">{Data.sininenNappi}</button>
              </Link>
            </div>
          )}
          {Data.PeukkuKuva && (
            <>
              <div className="Text-div">
                <img src={Data.PeukkuKuva} alt="kuva" />
                <p>PEUKKUTEHTÄVÄ</p>
              </div>
              <div className="Image-container">
                <img className="image25" src={Data.peukkuKuva} alt="Image" />
              </div>
            </>
          )}
          {Data.Tekstit &&
            Array.isArray(Data.Tekstit) &&
            Data.Tekstit.map((text, index) => (
              <div key={`text_${index}`} className="Text-div">
                <p className="Text">
                  {text.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index !== text.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}

          {Data.tarinaNappi && (
            <>
              <div className="Text-div-yellow">
                <p>TARINA</p>
              </div>
              <div className="Sininen-nappi">
                <Link to={Data.buttonLink}>
                  <button className="Blue-button">{Data.tarinaNappi}</button>
                </Link>
              </div>
              <div className="siniKuva">
                <img src={Data.tarinaKuva} alt="kuva" />
              </div>
            </>
          )}
          {Data.tarinaTeksti && (
            <>
              <div className="Text-div-yellow">
                <p>TARINA</p>
              </div>
              <div className="Text-div">
                <p className="Red-text">{Data.tarinaTeksti}</p>
              </div>
            </>
          )}
          {Data.TarinaKuvat && (
            <>
              <p className="Text-div-yellow">TARINA</p>
              <div className="Tarina-Image-container">
                {Data.TarinaKuvat.map((kuva, index) => (
                  <img
                    className="Full-image"
                    src={kuva}
                    alt={`Image ${index}`}
                  />
                ))}
              </div>
              <div className="Otsikot">
                {Data.TarinaOtsikot.map((otsikko, index) => (
                  <p className="White-text-nappi">{otsikko}</p>
                ))}
              </div>
              <div className="tarinaTekstit">
                {Data.TarinaTekstit.map((teksti, index) => (
                  <p className="White-text">{teksti}</p>
                ))}
              </div>
            </>
          )}
          {Data.juhlaTarinaKuva && (
            <div>
              <img src={Data.juhlaTarinaKuva} alt="kuva" />
            </div>
          )}

          {Data.Teksti && (
            <div className="Text-div">
              <p className="Text" style={{}}>
                {Data.Teksti.split("\n").map((text, index) => (
                  <React.Fragment key={index}>
                    {text}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          )}
          {Data.ApinSoundCloud && <SoundCloud url={Data.ApinSoundCloud} />}
          {Data.numeroLista && (
            <div className="Numerolista">
              <ol>
                {Data.numeroLista.map((numero, index) => (
                  <li key={`numero_${index}`}>{numero}</li>
                ))}
              </ol>
            </div>
          )}
          {Data.peliKuva && (
            <div className="peliKuva">
              <img src={Data.peliKuva} alt="kuva" />
            </div>
          )}
          {Data.loppuTeksti && (
            <div className="Text-div-loppu">
              <p className="White-text">
                Tutustu lisää Digiseikkailun tarinoihin, tehtäviin ja peleihin{" "}
                {Data.loppuTeksti} osiossa.
              </p>
            </div>
          )}
          {Data.numeroListat && (
            <>
              {Data.numeroListat.map((lista, listaIndex) => (
                <div className="Numerolista" key={`numerolista_${listaIndex}`}>
                  {Data.numeroListaTitlet &&
                    listaIndex < Data.numeroListaTitlet.length && (
                      <p key={`title_${listaIndex}`} className="title">
                        {Data.numeroListaTitlet[listaIndex]}
                      </p>
                    )}
                  <ol key={`lista_${listaIndex}`}>
                    {lista.map((item, index) => (
                      <li key={`item_${index}`}>{item}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </>
          )}
          {Data.palloLista && (
            <div className="Pallolista">
              <ul>
                {Data.palloLista.map((pallo, index) => (
                  <li key={`pallo_${index}`}>{pallo}</li>
                ))}
              </ul>
            </div>
          )}
          {Data.palloListat && (
            <>
              {Data.palloListat.map((lista, listaIndex) => (
                <div className="Pallolista" key={`lista_${listaIndex}`}>
                  <ul>
                    {lista.map((item, index) => (
                      <li key={`item_${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
          {Data.peliTitle ? (
            <p className="White-text small-title">{Data.peliTitle}</p>
          ) : null}
          <Link to={Data.buttonLink}>
            {Data.buttonText && <CommonButton text={Data.buttonText} />}
          </Link>
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
      {activeTab === "Kysely" && Data.kysymys && (
        <>
          {!completedExercise ? (
            <div className="Kysymys-title">
              <h3 className="White-text">
                {Data.tehtNum}. {Data.tehtName}
              </h3>
              <h3 className="White-text">{Data.kysymys}</h3>
              {selectedAnswer === "correct" && (
                <p className="White-text">Oikein!</p>
              )}
              {selectedAnswer === "wrong" && (
                <p className="White-text">Väärin!</p>
              )}

              <div className="Kysymys-vaihtoehdot">
                {Data.vaihtoehdot.map((vaihtoehto, index) => (
                  <div
                    key={`vaihtoehto_${index}`}
                    className="Kysymys-vaihtoehto"
                  >
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
            </div>
          ) : (
            <>
              <p className="White-text">
                Olet jo suorittanut tämän tehtävän. Voit siirtyä seuraavaan
                tehtävään!
              </p>
            </>
          )}
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
