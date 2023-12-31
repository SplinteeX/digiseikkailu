import "../css/empatiapolku.css";
import Oikeinmerkki from "../elements/empatiapolku/Listatekstit";
import { EmpatiaData } from "../data/empatiaData";
import SuuntaMerkki from "../elements/empatiapolku/suuntaMerkki";
import suuntamerkkikuva from "../../assets/suuntamerkki.webp";

export const EmpatiaPolku = () => {
  return (
    <div className="empatiapolku">
      <h1>Oppimistavoitteet</h1>
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
    </div>
  );
};
