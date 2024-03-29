import "../css/empatiapolku.css";
import Oikeinmerkki from "../elements/empatiapolku/Listatekstit";
import { EmpatiaData } from "../data/empatiaData.jsx";
import SuuntaMerkki from "../elements/empatiapolku/suuntaMerkki";
import suuntamerkkikuva from "/empatiapolku/suuntamerkki.webp";
import maisema from "/empatiapolku/maisemakuva.webp";
import { Link } from "react-router-dom";
const vuoropuhelut = [
  {
    kuva: "/public/empatiapolku/Puhuja1.webp",
    teksti:
      "— Moi! Olen Häsä. Tässä on paras kaverini Appi. Tämä on Somen kaupunki!",
  },
  {
    kuva: "/public/empatiapolku/Puhuja2.webp",
    teksti:
      "— Tule, näytämme sinulle vähän paikkoja ja asukkaita. Tapaat Tweetyn, Dogen, Laaman, Miuku-Maukun ja Kursorin.",
  },
];
export const EmpatiaPolku = () => {
  return (
    <div className="empatiapolku">
      <h1>Empatiapolku</h1>
      <div className="buttons">
        <button className="active">Tavoitteet</button>
        <Link to="/tehtävät/empatiapolku/1">
          <button>Tehtävät</button>
        </Link>
      </div>
      <div className="uppersection">
        <div className="oikeinmerkit">
          {EmpatiaData.map((item, index) => (
            <div className="oikeinmerkki">
              <Oikeinmerkki key={index} teksti={item} />
            </div>
          ))}
        </div>
        <div className="rightside">
          <SuuntaMerkki
            kuva={suuntamerkkikuva}
            teksti="Kuka jättää Tweetyn viestiseinälle ilkeitä kommentteja? Mitä on vihapuhe ja miksi joku kirjoittaa sitä?"
          ></SuuntaMerkki>
        </div>
      </div>
      <div className="lowersection">
        <img src={maisema} width="100%" alt="" />
        {vuoropuhelut.map((item, index) => (
          <div className="vuoropuhelu">
            <div className="kuva">
              <img src={item.kuva} width={"100px"} height={"100px"} alt="" />
            </div>
            <p>{item.teksti}</p>
          </div>
        ))}
        <div className="Hämis">
          <img
            src="/public/empatiapolku/hamis.png"
            width={"200px"}
            height={"150px"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
