import "../css/empatiapolku.css";
import Oikeinmerkki from "../elements/Listatekstit";
import suuntamerkki from "../../assets/suuntamerkki.webp";
import maisema from "../../assets/maisemakuva.webp";
import empatiadata from "../data/empatiaData";
import { vuoropuhujat, vuorosanat } from "../data/vuorosanat";
import {vuorosanas, vuoropuhuja} from "../data/vuorojutut"
import viestit from "../data/viestit"
import Vuoropuhelu from "../elements/vuoropuhelut";
import hamis from "../../assets/hämis.webp";
import hämis from "../../assets/hämis2.webp";
import peukut from "../../assets/peukut.webp"
import peukkuohje from "../../assets/peukkuohjeet.webp"
import papu from "../../assets/papukaija.webp"
import kissa from "../../assets/kissakuva.webp"
import somekaveri from "../../assets/somekaveri.webp"
import YoutubeVideo from "../elements/YoutubeVideo"
import Postit from "../elements/postitit";
const empatiapolku = () => {
  return (
    <div className="empatiapolku">
      <h1>Oppimistavoitteet</h1>
      <div className="empatiapolku-container">
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
      <div className="viestiseinä">
          <div className="tweety">
              <h3>Tweetyn viestiseinä</h3>
          </div>
          <div className="viestiteksti">
              <h5>Tässä on <span className="bold">Tweety.</span> Se hallinnoi kaupungin viestiseinää ja on laajan lintuverkoston ylläpitäjä.
                 Ylläpitäjän tehtäviin kuuluu viestien tarkkaileminen ja sääntöjen vastaisten viestien poistaminen.</h5>
          </div>
      </div>
      <div className="papukaija">
        <img src={papu}></img>
      </div>
      <div className="laatikko">
        <div className="leftkissa">
          <div className="tehtäväteksti">
            <h4>TEHTÄVÄ 2</h4>
          </div>
          <img src={kissa} alt="Kuva" />
          <div className="tekstia">
            <h5>Ota selvää mistä asiasta Tweety oli huolissaan?</h5>
          </div>
        </div>
        <div className="youtubevidi">
          <video controls width="700" src="https://digiadventurers.com/wp-content/uploads/2019/10/720p-kopio.mov"></video>
        </div>
      </div>

      <div className="Vuoro">
        {vuorosanas.map((vuorosan, index) => (
        <Vuoropuhelu
          key={index}
          width="32px"
          height="32px"
          teksti={vuorosan}
          kuva={vuoropuhuja[index]}
          />
          ))}
      </div>

      <div className="teht3">
        <h2>TEHTÄVÄ 3</h2>
        <img src={kissa}></img>
      </div>
      <div className="teht3h3">
        <h3>Mitkä viestit sinä poistaisit seinältä?</h3>
      </div>
      <div className="hämähäkki">
        <img src={hämis}></img>
      </div>
      <div className="post-it">
        {viestit.map((viest, index) => (
        <Postit 
          key={index}
          kuva={viest}
        ></Postit>))}
      </div>
      <div className="empatiapolku-teht4A5">
        <h2>TEHTÄVÄ 4 JA 5</h2>
        <img src={kissa}></img>
      </div>
      <div className="empatiapolku-videocontainer">
        <div className="empatiapolku-youtubevidi1">
          <YoutubeVideo
            videoId="VCqX0G-hQDo"
            width={"100%"}
            height={"250px"}
            color={"#79b7e2"}
            
          />
        </div>
        <div className="empatiapolku-youtubevidi2">
          <YoutubeVideo
              videoId="lekkpIfJ-Ec"
              width={"25%"}
              height={"250px"}
              color={"#79b7e2"}
              
          />
        </div>
        <div className="empatiapolku-somekaveri">
          <img src={somekaveri}></img>
        </div>
      </div>
      <div className="empatiapolku-buttoncontainerwrapper">
        <a href="" class="empatiapolku-buttoncontainer">
          <span>Kiva somekaveri -tehtävä 6</span>
        </a>
      </div>
      <div className="empatiapolku-tekstiholder">
        <div className="empatiapolku-teksti1">
          <h2>Mikä on netiketti?</h2>
        </div>
        <div className="empatiapolku-teksti2">
          <h2>Somekaveruus</h2>
        </div>
        <div className="empatiapolku-hämis">
          <img src={hämis}/>
        </div>
      </div>
      

    </div>
  );
};

export default empatiapolku;
