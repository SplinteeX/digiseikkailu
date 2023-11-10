import "../css/empatiapolku.css";
import Oikeinmerkki from "../elements/Listatekstit";
import suuntamerkki from "../../assets/suuntamerkki.webp";
import maisema from "../../assets/maisemakuva.webp";
import empatiadata from "../data/empatiaData";
import { vuoropuhujat, vuorosanat } from "../data/vuorosanat";
import Vuoropuhelu from "../elements/vuoropuhelut";
import hamis from "../../assets/hämis.webp";
import peukut from "../../assets/peukut.webp"
import peukkuohje from "../../assets/peukkuohjeet.webp"
const empatiapolku = () => {
  return (
    <div className="empatiapolku">
      <h1>Oppimistavoitteet</h1>
      <div className="container">
        <div className="oikeinmerkit">
          {empatiadata.map((empatiadata, index) => (
            <Oikeinmerkki
              key={index}
              width="32px"
              height="32px"
              teksti={empatiadata}
            ></Oikeinmerkki>
          ))}
        </div>

        <div className="right-div">
          <div className="suunta">
            <img src={suuntamerkki} height={550} width={623}></img>
          </div>
          <div className="vihapuhe">
            <h1>
              Kuka jättää Tweetyn<br></br>
              viestiseinälle ilkeitä<br></br>
              kommentteja?<br></br>
              <br></br>
              Mitä on vihapuhe ja miksi joku<br></br>
              kirjoittaa sitä?
            </h1>
          </div>
        </div>
      </div>
      <div className="maisema">
        <img src={maisema} height={550} width={1000}></img>
      </div>
      <div className="vuorot">
        {vuorosanat.map((vuorosana, index) => (
          <Vuoropuhelu
            key={index}
            width="32px"
            height="32px"
            teksti={vuorosana}
            kuva={vuoropuhujat[index]}
            ></Vuoropuhelu>
            

        ))}
      </div>
      <div className="hämis">
        <img src={hamis}></img>
      </div>
      <div className="peukut">
        <img src={peukut}></img>
      </div>
      <div className="peukkutehtävä">
        <h1>PEUKKUTEHTÄVÄ 1</h1>
      </div>
      <div className="peukkuohjeet">
          <img src={peukkuohje}></img>
      </div>
    </div>
  );
};

export default empatiapolku;
