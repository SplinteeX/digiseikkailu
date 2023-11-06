import "../css/empatiapolku.css";
import Oikeinmerkki from "../elements/Listatekstit"
import suuntamerkki from "../../assets/suuntamerkki.webp"
import maisema from "../../assets/maisemakuva.webp"
const empatiapolku = () => {
    return (
      <div className="empatiapolku">
        <h1>Oppimistavoitteet</h1>
          <div className="container">
            <div className="oikeinmerkit">
              <Oikeinmerkki width="32px" height="32px" teksti="tunnistaa nettikiusaaminen ja vihapuhe"></Oikeinmerkki>
              <Oikeinmerkki width="32px" height="32px" teksti="pysäyttää kiusaaminen ja vihapuhe omalta kohdalta"></Oikeinmerkki>
              <Oikeinmerkki width="32px" height="32px" teksti="oppia sananvapauden vastuusta" />
              <Oikeinmerkki width="32px" height="32px" teksti="ymmärtää mielipiteen perustelun merkitys" />
              <Oikeinmerkki width="32px" height="32px" teksti="harjoitella viestien kirjoittamista" />
              <Oikeinmerkki width="32px" height="32px" teksti="pohtia, miten voidaan rakentaa yhteisöllistä ja toiset huomioon ottavaa viestintäkulttuuria netissä" />
              <Oikeinmerkki width="32px" height="32px" teksti="kehittää lapsen laajaa tekstikäsitystä kuvan, videon ja tekstien kautta" />
              <Oikeinmerkki width="32px" height="32px" teksti="oppia käyttämään, tulkitsemaan ja tuottamaan monimediaisia tekstejä" />
              <Oikeinmerkki width="32px" height="32px" teksti="käyttää tieto- ja viestintäteknologiaa vastuullisesti ja turvallisesti" />
              <Oikeinmerkki width="32px" height="32px" teksti="harjoitella tunnetaitoja ja tutustua empatian käsitteeseen" />
            </div>

            <div className="right-div">

            <div className="suunta">
              <img src={suuntamerkki} height={550} width={623}></img>
            </div>
            <div className="vihapuhe">
              <h1>Kuka jättää Tweetyn<br></br>
                  viestiseinälle ilkeitä<br></br>
                  kommentteja?<br></br><br></br>

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
  }
  
  export default empatiapolku;