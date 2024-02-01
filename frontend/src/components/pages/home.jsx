import MediaText from "../elements/mediaText";
import { TehtäväPaketit } from "../data/TehtäväPaketit";
import { ExerciseCard } from "../elements/ExerciseCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import "../css/Exercises.css";

const Home = () => {
  const { t } = useTranslation();
  const {
    Apinmaja,
    häsänStudio,
    TweetynViestiseinä,
    DogenBoxi,
    KursorinUllakko,
    SirynÄlytalo,
    Laamanaitaus,
    MiukuMauku,
    Ohjelmointi,
  } = TehtäväPaketit();
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardFlip = (index) => {
    if (flippedIndex === index) {
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
    }
  };

  const mediaTextData = [
    {
      title: "Näppäintaidot haltuun TVT-opetuksen taitopaketilla",
      Image: "/images/tvt-opetuksen-taitopaketti-home.png",
      text: "Näppäintaitokortit ovat loistava apu TVT-opetuksen perustaitojen vahvistamisessa!...",
      url: "/tuotteet/TVT-opetuksen-taitopaketti",
    },
    {
      title: "Tarinat ja tehtävät -työkirja",
      Image: "/images/tarinat-ja-tehtävät-työkirja-home.png",
      text: "Tarinat ja tehtävät -työkirja tarjoaa mielenkiintoisia ja hauskoja tapoja oppia tieto- ja viestintäteknologian käsitteitä sekä vahvistaa lukemisen ja kuvittelemisen taitoja...",
      url: "/tuotteet/TarinatTyokirja",
    },
  ];

  return (
    <div className="Home-wrapper">
      <div className="Exercise-cards">
        <h2 className="Title">Tehtävämaailmat</h2>
        <div className="Tehtävä-Paketit">
          <div className="Kortit">
            {[
              Apinmaja[0],
              häsänStudio[0],
              TweetynViestiseinä[0],
              DogenBoxi[0],
              KursorinUllakko[0],
              SirynÄlytalo[0],
              Laamanaitaus[0],
              MiukuMauku[0],
              Ohjelmointi[0],
            ].map((exercise, index) => (
              <ExerciseCard
                key={index}
                Data={exercise}
                Flipped={flippedIndex === index}
                handleCardFlip={() => handleCardFlip(index)}
                initialAnimation={{ opacity: 0, y: 50 }}
                animateAnimation={{ opacity: 1, y: 0 }}
                transitionAnimation={{ duration: 0.5, delay: index * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="home-read-more">
        {mediaTextData.map((data, index) => (
          <MediaText
            key={index}
            title={data.title}
            image={data.Image}
            text={data.text}
            buttonLabel={"Lue lisää"}
            url={data.url}
          />
        ))}
      </div>
      <div className="home-empatia-polku">
        <MediaText
          title={
            "Digiseikkailun Empatiapolku on ilmaista opetusmateriaalia kouluille empatiataitojen ja verkossa käyttäytymisen vahvistamiseksi."
          }
          image={"/images/home-empatia-polku.png"}
        />
      </div>
    </div>
  );
};

export default Home;
