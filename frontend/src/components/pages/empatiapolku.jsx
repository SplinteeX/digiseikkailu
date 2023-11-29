import "../css/empatiapolku.css";
import Oikeinmerkki from "../elements/Listatekstit";
import suuntamerkki from "../../assets/suuntamerkki.webp";
import maisema from "../../assets/maisemakuva.webp";
import empatiadata from "../data/empatiaData";
import { vuoropuhujat, vuorosanat } from "../data/vuorosanat";
import {vuorosanas, vuoropuhuja} from "../data/vuorojutut"
import {vuorosanax, vuoropuhujax} from "../data/vuoropuhuminen"
import {vuorosanasi, vuoropuhujasi} from "../data/laamavuoropuhelu"
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
import doge from "../../assets/dogekuva.webp";
import juhlakuva from "../../assets/juhlakuva.webp";
import TehtäväKissa from "../elements/Tehtavakissa";
import ilkeaKissa from "../../assets/Ilkeekissa.webp";
import Zombie from "../../assets/zombi.webp";
import frendit from "../../assets/frendit.webp";
import SininenNappi from "../elements/sininennappi";
import EmpatiaLaama from "../../assets/empatialaama.webp"
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
          <TehtäväKissa
          teksti="TEHTÄVÄ 2"
          ></TehtäväKissa>
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
        <TehtäväKissa
        teksti="TEHTÄVÄ 3"
        ></TehtäväKissa>
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
        <TehtäväKissa
        teksti="TEHTÄVÄ 4 JA 5"
        ></TehtäväKissa>
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

      <div className="empatiapolku-dogenpolku">
        <h3>Dogen boxi – Tehtävä 7</h3>
      </div>
      <div className="empatiapolku-dogeteksti">
          <h3>Doge on Somen kaupungin tarkin uutistentutkija. Se etsii kuvia sukulaisistaan,
             joita on esiintynyt paljon meemeissä lähivuosina.
             Samalla se on oppinut erottamaan valeuutiset oikeista, ammattilaisten tekemistä uutisista.
              Se tietää myös miten erilaisiin viesteihin tulisi suhtautua.</h3>
      </div>

      <div className="empatiapolku-dogekuva">
        <img src={doge}></img>
      </div>
      <div className="empatiapolku-hämis2">
        <img src={hamis}></img>
      </div>

      <div className="empatiapolku-vuoro">
        {vuorosanax.map((vuorosans, index) => (
          <Vuoropuhelu
            key={index}
            width="32px"
            height="32px"
            teksti={vuorosans}
            kuva={vuoropuhujax[index]}
          />
          ))}
      </div>

      <div className="empatiapolku-hämis3">
        <img src={hamis}></img>
      </div>

      <div className="empatiapolku-TARINA">
        <h1>TARINA</h1>
      </div>
      <div className="empatiapolku-juhlat">
        <h2>Juhlat voivat alkaa</h2>
      </div>
      <div className="empatiapolku-juhlakuva">
        <img src={juhlakuva}/>
      </div>
      
      <div className="empatiapolku-teht8-9-10">
        <TehtäväKissa
        teksti="TEHTÄVÄT 8, 9 JA 10"
        ></TehtäväKissa>
      </div>

      <div className="empatiapolku-youtube-vid">
        <YoutubeVideo
          videoId="PuzagnhDiek"
          width={"75%"}
          height={"200px"}
          color={"#79b7e2"}
        ></YoutubeVideo>
      </div>

      <div className="empatiapolku-sananvapaus">
        <h3>Sananvapaus tuo vastuuta!</h3>
      </div>

      <div className="empatiapolku-kuvat">
        <div className="empatiapolku-ilkeakissa">
          <img src={ilkeaKissa}></img>
        </div>
        <div className="empatiapolku-zombi">
          <img src={Zombie}></img>
        </div>
        <div className="empatiapolku-frendit">
          <img src={frendit}></img>
        </div>
      </div>
      
      <div className="empatiapolku-sinisetnapit">
        <div className="empatiapolku-Nappi1">
          <SininenNappi
           teksti="Mitä on vihapuhe?"
           ></SininenNappi>
          </div>
        <div className="empatiapolku-Nappi2">
          <SininenNappi
           teksti="Tunnista ja pysäytä vihapuhe"
           ></SininenNappi>
        </div>
        <div className="empatiapolku-Nappi3">
          <SininenNappi
           teksti="Kehupuhe"
           ></SininenNappi>
        </div>
      </div>

      <div className="empatiapolku-laamanaitaus">
        <h3>Laaman aitaus – Tehtävä 11</h3>
      </div>

      <div className="empatiapolku-hasanpiha">
        <h2>Seuraavaksi kaverukset lähtivät Häsän pihalle. Siellä odotti Häsän lemmikki, Laama. Se on tunteikas ja herkkä otus ja erittäin innostunut uudesta puhelimestaan.</h2>
      </div>

      <div className="empatiapolku-empatialaama">
        <img src={EmpatiaLaama}  />
      </div>

      <div className="empatiapolku-laamavuoro">
        {vuorosanasi.map((vuorosanassi, index) => (
          <Vuoropuhelu
            key={index}
            width="32px"
            height="32px"
            teksti={vuorosanassi}
            kuva={vuoropuhujasi[index]}
          />
          ))}
      </div>



    </div>
  );
};

export default empatiapolku;
