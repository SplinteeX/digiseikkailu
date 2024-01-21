import "../css/empatiapolku.css";
import Oikeinmerkki from "../elements/empatiapolku/Listatekstit";
import { EmpatiaData } from "../data/empatiaData";
import SuuntaMerkki from "../elements/empatiapolku/suuntaMerkki";
import suuntamerkkikuva from "../../assets/suuntamerkki.webp";
import maisema from "../../assets/maisemakuva.webp";
import { Link } from "react-router-dom";
const vuoropuhelut = [
  {
    kuva: "/src//assets/Puhuja1.webp",
    teksti:
      "— Moi! Olen Häsä. Tässä on paras kaverini Appi. Tämä on Somen kaupunki!",
  },
  {
    kuva: "/src/assets/Puhuja2.webp",
    teksti:
      "— Tule, näytämme sinulle vähän paikkoja ja asukkaita. Tapaat Tweetyn, Dogen, Laaman, Miuku-Maukun ja Kursorin.",
  },
];
export const EmpatiapolkuTeht = () => {
  return (
    <div className="empatiapolku">
      <h1>Empatiapolku</h1>

      <div className="buttons">
        <Link to="/empatiapolku">
          <button>Tavoitteet</button>
        </Link>
        <button className="active">Tehtävät</button>
      </div>
    </div>
  );
};
