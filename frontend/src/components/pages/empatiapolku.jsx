import "../css/empatiapolku.css";
import Oikeinmerkki from "../elements/Listatekstit";
import suuntamerkki from "../../assets/suuntamerkki.webp";
import maisema from "../../assets/maisemakuva.webp";
import empatiadata from "../data/empatiaData";
import { vuoropuhujat, vuorosanat } from "../data/vuorosanat";
import {vuorosanas, vuoropuhuja} from "../data/vuorojutut"
import {vuorosanax, vuoropuhujax} from "../data/vuoropuhuminen"
import {vuorosanasi, vuoropuhujasi} from "../data/laamavuoropuhelu"
import { vuorosanatkurs, vuoropuhujatkurs } from "../data/kursorinvuorot";
import { vuorosanatkurs2, vuoropuhujatkurs2 } from "../data/kursorinvuorot2";
import {lauseet, puhuja} from "../data/teht14vuorot";
import puhelimet from "../data/puhelinData"
import viestit from "../data/viestit"
import Vuoropuhelu from "../elements/vuoropuhelut";
import hamis from "../../assets/hämis.webp";
import hämis from "../../assets/hämis2.webp";
import peukut from "../../assets/peukut.webp"
import peukkuohje from "../../assets/peukkuohjeet.webp"
import peukkuohje2 from "../../assets/peukkuohjeet2.webp"
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
import HamisTeksti from "../elements/hamisteksti";
import Puhelimet from "../elements/puhelimet";
import puhelin1 from "../../assets/puhelin1.webp";
import puhelin2 from "../../assets/puhelin2.webp";
import puhelin3 from "../../assets/puhelin3.webp";
import puhelin4 from "../../assets/puhelin4.webp";
import noita from "../../assets/noita.webp";
import zombi2 from "../../assets/zombi2.webp";
import ilmoitustaulu from "../../assets/ilmoitustaulu.webp";
import muistio from "../../assets/muistio.webp";
import TehtäväBoxi from "../elements/tehtäväboxi";
import nettisurffaus from "../../assets/nettisurffaus.webp"
import vihainenpappa from "../../assets/vihainenpappa.webp"
import ovelakissa from "../../assets/ovelakissa.webp"
import trolliposti from "../../assets/trolliposti.webp"
import peukkuohje3 from "../../assets/peukkuohjeet3.webp"
import kursorikuva from "../../assets/kursorikuva.webp"
import laamapeli from "../../assets/laamapelit.webp"
import laamasetti from "../../assets/laamasetti.webp"
import hämishiiri from "../../assets/hämishiiri.webp"
import digiseikkailu2 from "../../assets/digiseikkailu2.webp"


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
              <TehtäväBoxi
              teksti="Tweetyn viestiseinä"
              ></TehtäväBoxi>
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
        <TehtäväBoxi
        teksti="Dogen boxi – Tehtävä 7"
        ></TehtäväBoxi>
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
        <TehtäväBoxi
          teksti="Laaman aitaus – Tehtävä 11"
        ></TehtäväBoxi>
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

      <div className="empatiapolku-peukkutehtävä">
        <h1>PEUKKUTEHTÄVÄ</h1>
      </div>

      <div className="empatiapolku-peukkukuva">
        <img src={peukut}/>
      </div>
      <div className="empatiapolku-peukkuohjeet2">
        <img src={peukkuohje2}/>
      </div>

      <div className="empatiapolku-tehtävä12">
        <TehtäväKissa
          teksti="TEHTÄVÄ 12"
        ></TehtäväKissa>
      </div>
      
      <div className="empatiapolku-hämisteksti">
        <HamisTeksti
          teksti="Miten viestin tunnelma muuttuu kun vaihdat emojia?"
        ></HamisTeksti>
      </div>

      <div className="empatiapolku-puhelimet">
        <img src={puhelin1}></img><img src={puhelin2}></img>
        <img src={puhelin3}></img><img src={puhelin4}></img>
      </div>

      <div className="empatiapolku-häsänstudio">
        <TehtäväBoxi
          teksti="Häsän studio – Tehtävä 13"
        ></TehtäväBoxi>
      </div>

      <div className="empatiapolku-häsäntekstejä">
        <p>Häsän huoneessa on erilaisia videokuvaamiseen liittyviä tavaroita, kuten vakain, kolmijalka ja kuvausvalo.
           Häsän äiti on alkanut kutsua sitä leikillään Häsän Studioksi.<br></br><br></br>
           Viimein <strong>Häsä</strong> ja <strong>Appi</strong> pääsivät Häsän kotiin tekemään läksyjä.
            Tehtävien jälkeen Häsä selaili <strong>YouTube-kanavansa</strong> kommentteja.</p>
      </div>

      <div className="empatiapolku-nettisurffaus">
        <img src={nettisurffaus}></img>
      </div>

      <div className="empatiapolku-tehtävä14">
        <div className="empatiapolku-leftkissa2">
          <TehtäväKissa
          teksti="TEHTÄVÄ 2"
          ></TehtäväKissa>
          <div className="empatiapolku-tekstia2">
            <h5>Millaisia tunteita eri kommentit aiheuttivat Häsässä?</h5>
          </div>
        </div>
        <div className="empatiapolku-youtubevidi2">
          <video controls width="700" src="https://digiadventurers.com/wp-content/uploads/2019/10/1080p.mov"></video>
        </div>
      </div>

      <div className="empatiapolku-teht14vuoro">
        {lauseet.map((lauseet1, index) => (
          <Vuoropuhelu
            key={index}
            width="32px"
            height="32px"
            teksti={lauseet1}
            kuva={puhuja[index]}
          />
          ))}
      </div>
      <div className="empatiapolku-TARINA2">
        <h1>TARINA</h1>
      </div>

      <div className="empatiapolku-trollipostia">
        <SininenNappi
        teksti="Trollipostia SuperSovellukselle"
        ></SininenNappi>
      </div>

      <div className="empatiapolku-trollipostikuva">
        <img src={trolliposti}></img>
      </div>
      <div className="empatiapolku-tehtkissa18">
        <TehtäväKissa
        teksti="TEHTÄVÄT 15, 16, 17 JA 18"
        ></TehtäväKissa>
      </div>

      <div className="empatiapolku-kuvat2">
        <div className="empatiapolku-noita">
          <img src={noita}></img>
        </div>
        <div className="empatiapolku-zombi2">
          <img src={zombi2}></img>
        </div>
        <div className="empatiapolku-ilmoitustaulu">
          <img src={ilmoitustaulu}></img>
        </div>
        <div className="empatiapolku-muistio">
          <img src={muistio}></img>
        </div>
      </div>
      
      <div className="empatiapolku-sinisetnapit2">
        <div className="empatiapolku-SNappi1">
          <SininenNappi
           teksti="Trolli, provo ja fleimaus!"
           ></SininenNappi>
          </div>
        <div className="empatiapolku-SNappi2">
          <SininenNappi
           teksti="Trolli kommentoimassa"
           ></SininenNappi>
        </div>
        <div className="empatiapolku-SNappi3">
          <SininenNappi
           teksti="Mielipidekirjoitus"
           ></SininenNappi>
        </div>
        <div className="empatiapolku-SNappi4">
          <SininenNappi
           teksti="Parannusehdotus"
           ></SininenNappi>
        </div>
      </div>

      <div className="empatiapolku-peukut3">
        <img src={peukut}></img>
      </div>
      <div className="empatiapolku-peukkuteksti3">
        <h1>PEUKKUTEHTÄVÄ</h1>
      </div>
      <div className="empatiapolku-peukkuohje3">
        <img src={peukkuohje3}></img>
      </div>
      <div className="empatiapolku-kursorinullakko">
        <TehtäväBoxi
        teksti="Kursorin ullakko - Tehtävä 19"
        ></TehtäväBoxi>
      </div>
      <div className="empatiapolku-kursoritekstejä">
        <h2>Taitava <strong>Kursori-pappa</strong> Häsän naapurista oli korjannut Apin rikkimenneen puhelimenlasin.</h2>
        <h2>Häsä ja Appi kävivät hakemassa puhelimen takaisin ja vaihtoivat kuulumisia Kursorin kanssa.</h2>
      </div>
      <div className="empatiapolku-kursorikuva">
        <img src={kursorikuva}></img>
      </div>

      <div className="empatiapolku-laatikko3">
        <div className="empatiapolku-leftkissa3">
          <TehtäväKissa
          teksti="TEHTÄVÄ 20"
          ></TehtäväKissa>
          <div className="empatiapolku-tekstia3">
            <h5>Tutki viestittelyä.<br></br><br></br>
                Mistä asiasta Kursori on huolissaan?</h5>
          </div>
        </div>
        <div className="empatiapolku-youtubevidi3">
          <video controls width="700" src="https://digiadventurers.com/wp-content/uploads/2019/10/720p.mov"></video>
        </div>
      </div>
      <div className="empatiapolku-kursorinhuolet">
        {vuorosanatkurs.map((vuorosana, index) => (
          <Vuoropuhelu
            key={index}
            width="32px"
            height="32px"
            teksti={vuorosana}
            kuva={vuoropuhujatkurs[index]}
            ></Vuoropuhelu>
            

        ))}
      </div>
      <div className="empatiapolku-TARINA3">
        <h1>TARINA</h1>
      </div>
      
      <div className="empatiapolku-videotähti">
        <div className="empatiapolku-vihainenpappa">
          <img src={vihainenpappa}></img>
        </div>
        <div className="empatiapolku-ovelakissa">
          <img src={ovelakissa}></img>
        </div>
      </div>

      <div className="empatiapolku-osat">
        <div className="empatiapolku-osa1">
            <h2>Osa 1</h2>
            <br></br><br></br>
            <h3>Huono-onninen videotähti</h3>
        </div>
        <div className="empatiapolku-osa2">
            <h2>Osa 2</h2>
            <br></br><br></br>
            <h3>Huono-onninen videotähti</h3>
        </div>
      </div>

      <div className="empatiapolku-kursorinhuolet2">
        {vuorosanatkurs2.map((vuorosana, index) => (
          <Vuoropuhelu
            key={index}
            width="32px"
            height="32px"
            teksti={vuorosana}
            kuva={vuoropuhujatkurs2[index]}
            ></Vuoropuhelu>
        ))}
      </div>

      <div className="empatiapolku-laamapeli">
        <img src={laamapeli} alt="" />
      </div>

      <div className="empatiapolku-tutustu">
        <h2>Tutustu lisää Digiseikkailun tarinoihin, tehtäviin ja peleihin <a href="">Tietoa opettajalle</a> osiossa</h2>
      </div>

      <div className="empatiapolku-laamasetti">
        <img src={laamasetti} alt="" />
      </div>

      <div className="empatiapolku-hämishiiri">
          <img src={hämishiiri} alt="" />
      </div>

      <div className="empatiapolku-digiseikkailu2">
          <img src={digiseikkailu2} alt="" />
      </div>

      <div className="empatiapolku-loppupalkki">
        
      </div>



        
    </div>
  );
};

export default empatiapolku;
