import "../css/empatiapolku.css";
import Oikeinmerkki from "../elements/Listatekstit";
import suuntamerkki from "../../assets/suuntamerkki.webp";
import maisema from "../../assets/maisemakuva.webp";
import empatiadata from "../data/empatiaData";
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
    </div>
  );
};

export default empatiapolku;
