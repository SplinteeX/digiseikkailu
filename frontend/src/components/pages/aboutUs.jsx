import React from "react";
import { Link } from "react-router-dom";
import "../css/aboutUs.css";
import mouseImage from "/images/About-us-mouse-image.webp";
import svg from "../../assets/About-us-button-image.svg";
import videoSrc from "/teacher-info/Tietoa-opettajalle-video.mp4";
import breikkeri from "/images/yhteistyo-kuvat/breikkeri.png.webp";
import empatia from "/images/yhteistyo-kuvat/Empatia.jpg.webp";
import nitomani from "/images/yhteistyo-kuvat/Nitomani.png.webp";
import helsinki from "/images/yhteistyo-kuvat/HELSINKI.png.webp";
import loput from "/images/yhteistyo-kuvat/loput.png.webp";

export const AboutUs = () => {
  const infoTexts = {
    strong:
      "Digiseikkailu Oy:n oppimateriaalit ovat syntyneet tarpeesta ja ilosta tuottaa ajankohtaista opetusmateriaalia tvt-taitojen ja mediataitojen pedagogiikkaan. Nyt koko tuoteperhe on saatavilla kotiin ja kouluun.",
    text: "oppimateriaaliemme arvoja",
  };

  const yhteystiedot = [
    "info@digiseikkailu.com(tulee olemaan linkki)",
    "Digiseikkailu – Digiadventurers.com – on tvt- ja medialukutaito-oppimateriaali esi- ja alakouluun. Opettajien kehittämä tarinallinen Digiseikkailu on pelillinen oppimisympäristö, joka helpottaa tvt:n perustaitojen oppimista ja opettamista.",
    "Digiseikkailun Empatiapolku on osa koko Suomen laajuista Empatiapakkausta, joka tuo työvälineitä perheille ja opettajille empaattisempaan viestimiseen netissä.",
    <p>
      Digiseikkailu on suunniteltu tukemaan lapsen kasvua kohti{" "}
      <strong>tiedostavaa mediankäyttöä.</strong>Sen tehtävätyypit kannustavat
      lasta pohtimaan <strong>empatiaa,</strong> viestittelytaitoja ja{" "}
      <strong>yhteisöllisyyden merkitystä</strong> mediankäytössään.
    </p>,
    <p>
      Digiseikkailu tukee tehtävillään{" "}
      <strong>
        teknologiataitojen käsitteiden ja menetelmien hallinnassa,
      </strong>{" "}
      kuten <strong>tekstinkäsittely-, näppäin- ja hiiritaitojen</strong>{" "}
      oppimisessa, sekä auttaa opettajaa rajaamaan ja{" "}
      <strong>arvioimaan</strong> media- ja teknologiakasvatuksen projekteja.
    </p>,
    <p>
      Digiseikkailun avulla on hauskaa opettaa media- ja monilukutaitoa sekä
      teknologiataitojalaadukkaasti, opettajan kokemuksesta riippumatta.
    </p>,
  ];

  return (
    <div className="About-us">
      <video className="About-us-video" src={videoSrc} autoPlay></video>
      <div className="Lower-section">
        <div className="Lower-text-section">
          <div className="Tieto-teksti">
            <p>{infoTexts.strong}</p>
          </div>
          <div className="Tietoteksti">
            <p>{infoTexts.text}</p>
          </div>

          <img src={mouseImage} className="Mouse-image" alt="" />
          <div className="Yhteystiedot-otsikko">
            <h1>Yhteystiedot</h1>
          </div>

          <div className="Yhteystiedot-teksti1">
            <a href="mailto:info@digiseikkailu.com">info@digiseikkailu.com</a>
          </div>

          <div className="Yhteystiedot-teksti2">
            <strong>{yhteystiedot[1]}</strong>
          </div>

          <div className="Digi-linkki">
            <a href="https://Digiadventures.com">Digiadventures.com</a>
          </div>

          <div className="Yhteystiedot-teksti3">
            <strong>{yhteystiedot[2]}</strong>
            {yhteystiedot.slice(3).map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <button className="About-us-button">
          <img
            className="About-us-button-image"
            src={svg}
            width={"25px"}
            height={"25px"}
            alt=""
          />
          <Link to="/uutiset" style={{ textDecoration: "none" }}>
            <p>UUTISET</p>
          </Link>
        </button>

        <button className="About-us-button">
          <img
            className="About-us-button-image"
            src={svg}
            width={"25px"}
            height={"25px"}
          />
          <Link to="/blogi" style={{ textDecoration: "none" }}>
            <p>BLOGI</p>
          </Link>
        </button>

        <div className="Yhteistyossa">
          <a href="https://digiadventures.com">Yhteistyössä</a>
        </div>

        <div className="img-wrapper">
          <a href="" target="_blank" rel="noreferrer">
            <img
              src={empatia}
              width={146}
              height={76}
              aspectRatio:alt="Digi"
              alt="Digi"
            ></img>
          </a>
          <a href="https://breikkeri.fi" target="_blank" rel="noreferrer">
            <img src={breikkeri} width={111} height={36} alt="Digi"></img>
          </a>
          <a href="https://nitomanischool.com" target="_blank" rel="noreferrer">
            <img src={nitomani} width={136} height={136} alt="Digi"></img>
          </a>
          <a
            href="https://oppimisenuusiaika.fi/helsinki/eac/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={helsinki} width={158} height={73} alt="Digi"></img>
          </a>
        </div>
        <div>
          <img className="Loput-kuva" src={loput} />
        </div>
      </div>
    </div>
  );
};
