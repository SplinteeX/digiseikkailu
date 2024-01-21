import "../css/teacherinfo.css";
import { Hahmot } from "../data/Hahmot";
import { useState, useEffect } from "react";
export const Teacherinfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    const newTimer = setTimeout(() => {
      const newIndex =
        currentIndex === Hahmot.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000);
    setTimer(newTimer);
  };
  const resetTimer = () => {
    if (timer) {
      clearTimeout(timer);
      startTimer();
    }
  };
  useEffect(() => {
    startTimer();
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [currentIndex]);

  const nextSlide = () => {
    const newIndex = currentIndex === Hahmot.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    resetTimer();
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? Hahmot.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    resetTimer();
  };
  const infoTexts = [
    {
      text: "Digiseikkailu on pelillinen ja tarinallinen oppimisympäristö tieto- ja viestintätekniikan (TVT), medialukutaitojen sekä empatiataitojen opettamiseen esi- sekä alakouluikäisille. Klikkaa haluamaasi ikäryhmää ja tutustu ikäryhmälle suunnattuihin tehtäviin. Iloista seikkailua!",
    },
    {
      text: "Materiaalin tehtäviin ja tarinoihin tutustumalla ja yhdessä pohtimalla voidaan harjoitella medialukutaidon, nettiempatian ja perus tvt-taitojen teemoja ja käsitteistöä.",
    },
  ];
  const textData = [
    {
      text: "Digiseikkailu säästää opettajan työaikaa, tukee käytännön opetustyötä pedagogisesti valmiiksi mietittynä ratkaisuna ja mahdollistaa opetussuunnitelman mukaisen, tasalaatuisen kokonaisratkaisun kaikille opettajille.",
    },
    {
      text: "Hauskaa, helppoa ja ohjaavaa oppimista 6+ vuotiaille",
    },
    {
      text: "Voidaan myös integroida mihin tahansa oppiaineeseen osaksi ilmiöpohjaista oppimista.",
    },
    {
      text: "Digiseikkailusta löydät kattavaa materiaalia opetuksen tueksi. ",
    },
  ];
  return (
    <div className="Teacherinfo-wrapper">
      <div className="Teacherinfo-video">
        <video
          src="/teacher-info/Tietoa-opettajalle-video.mp4"
          autoPlay
        ></video>
        <div className="Info-text">
          <strong>
            <p>{infoTexts[0].text}</p>
          </strong>
        </div>
      </div>
      <div className="Teacherinfo-text">
        {textData.map((data, index) => (
          <ul key={index}>
            <strong>
              <li>{data.text}</li>
            </strong>
          </ul>
        ))}
      </div>
      <div className="Info text">
        <strong>
          <p>{infoTexts[1].text}</p>
        </strong>
      </div>
      <div className="Hahmot">
        <h3>Hahmot</h3>
        <div className="Hahmot-wrapper">
          <button onClick={prevSlide}>Previous</button>
          <div className="Hahmot-card">
            <img src={Hahmot[currentIndex].kuva} alt="" />
            <p>{Hahmot[currentIndex].kuvaus}</p>
          </div>
          <button onClick={nextSlide}>Next</button>
        </div>
        <div className="Buttons">
          {Hahmot.map((hahmo, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={currentIndex === index ? "active-button" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
