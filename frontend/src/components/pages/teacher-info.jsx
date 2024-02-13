import "../css/teacherinfo.css";
import { Hahmot } from "../data/Hahmot";
import { Slider } from "../elements/Slider";
import { useState } from "react";
import { FancySectionSlider } from "../elements/FancySectionSlider";
import { Tavoitteet } from "../data/Tavoitteet";
import { Link } from "react-router-dom";
export const Teacherinfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const KuvakeData = [
    {
      Kuvake: [
        "/Napit/Lukea-Vihreä.png",
        "/Napit/Lukea-Sininen.png",
        "/Napit/Lukea-Rosa.png",
      ],
      text: "Tämä kuvake on tarkoitettu tietotekstille ja tehtävälle",
    },
    {
      Kuvake: [
        "/Napit/Peli-Vihreä.png",
        "/Napit/Peli-Sininen.png",
        "/Napit/Peli-Rosa.png",
      ],
      text: "Tämä kuvake on tarkoitettu peleille",
    },
    {
      Kuvake: [
        "/Napit/Tarina-Vihreä.png",
        "/Napit/Tarina-Sininen.png",
        "/Napit/Tarina-Rosa.png",
      ],
      text: "Tämä kuvake on tarkoitettu tarinoille",
    },
    {
      Kuvake: [
        "/Napit/Video-Vihreä.png",
        "/Napit/Video-Sininen.png",
        "/Napit/Video-Rosa.png",
      ],
      text: "Tämä kuvake on tarkoitettu videoille",
    },
  ];
  const handleClick = () => {
    setCurrentIndex(currentIndex + 1 === 3 ? 0 : currentIndex + 1);
  };
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
      <div className="Taitotasot">
        <h3>Värit</h3>
        <div className="Taitotaso-kortit">
          <Link to="https://docs.google.com/document/d/1ayC3qYQqduXiMs684F2ztTCR378HQI_kjfXmX2q7ap4/edit">
            <div className="Kortti" style={{ backgroundColor: "#B3DD94" }}>
              <button>Suositusikä 6+ (1-2 luokka)</button>
            </div>
          </Link>
          <Link to="https://docs.google.com/document/d/1ayC3qYQqduXiMs684F2ztTCR378HQI_kjfXmX2q7ap4/edit">
            <div className="Kortti" style={{ backgroundColor: "#EDC9F9" }}>
              <button>Suositusikä 9+ (3-4 luokka)</button>
            </div>
          </Link>
          <Link to="https://docs.google.com/document/d/1ayC3qYQqduXiMs684F2ztTCR378HQI_kjfXmX2q7ap4/edit">
            <div className="Kortti" style={{ backgroundColor: "#89D3EE" }}>
              <button>Suositusikä 11+ (5-6 luokka)</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="Hahmot">
        <h3>Hahmot</h3>
        <Slider data={Hahmot} />
      </div>
      <div className="Kuvakkeet">
        <h3>Kuvakkeet</h3>
        <div className="Kuvakkeet-cards">
          {KuvakeData.map((data, index) => (
            <div
              className="Kuvake-kortti"
              key={index}
              onClick={() => handleClick(index)}
            >
              <img src={data.Kuvake[currentIndex]} alt="Kuvake" />
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="Tavoitteet">
        <h3>Tavoitteet</h3>
        <FancySectionSlider data={Tavoitteet} />
      </div>
    </div>
  );
};
