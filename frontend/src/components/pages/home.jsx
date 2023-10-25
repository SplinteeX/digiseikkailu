import CommonButton from "../elements/CommonButton";
import YoutubeVideo from "../elements/YoutubeVideo";
import MediaText from "../elements/mediaText";
import "../css/home.css";

const Home = () => {
  const videoData = [
    {
      strong:
        "Hyppää mukaan hauskojen ja mielenkiintoisten tehtävien pariin. Tehtävät sopivat opetussuunnitelman mukaiseen opetukseen ja vievät sinut sekä luokkasi tarinalliselle seikkailulle tieto- ja viestintätekniikan, medialuku- sekä empatiataitojen pariin. Matkalla tapaat hauskoja hahmoja.",
      light:
        "Digiseikkailussa on yli 120 erilaista tehtävää ja 23 tehtäviä tukevaa tarinaa. Tutustu Digiseikkailun laajaan sisältöön, ja valitse sopivat tehtävät luokkasi tarpeisiin.",
    },
    {
      light:
        "Ninni kertoo videolla, miten hän on hyödyntänyt Digiseikkailua opetuksessaan ja mitä vinkkejä hän haluaisi jakaa muille opettajille. Katso video, ja saat inspiraatiota Digiseikkailun käyttöön omassa opetuksessasi!",
    },
  ];
  const mediaTextData = [
    {
      title: "Näppäintaidot haltuun TVT-opetuksen taitopaketilla",
      Image: "/images/tvt-opetuksen-taitopaketti-home.png",
      text: "Näppäintaitokortit ovat loistava apu TVT-opetuksen perustaitojen vahvistamisessa! Laadukkaat ja selkeät kortit on helppo kiinnittää luokan seinälle, ja ne auttavat oppilaita muistamaan näppäimistön käytön ja pikatoiminnot. Kortit helpottavat myös opettamista ja oppimista.",
    },
    {
      title: "Tarinat ja tehtävät -työkirja ",
      Image: "/images/tarinat-ja-tehtävät-työkirja-home.png",
      text: "Tarinat ja tehtävät -työkirja tarjoaa mielenkiintoisia ja hauskoja tapoja oppia tieto- ja viestintäteknologian käsitteitä sekä vahvistaa lukemisen ja kuvittelemisen taitoja. Kirjan sisältämä lautapeli ja 10 tarinaa keskittyvät empatia-, teknologia- ja mediataitoihin, ja ne sisältävät sanastoa, yhdessä pohdittavia kysymyksiä sekä kynä-paperi-tehtäviä. Kirjan on kirjoittanut kokenut TVT-opettaja ja suomi toisena kielenä opettaja Jenni Turunen.",
    },
  ];
  return (
    <div className="Home-wrapper">
      <div className="First-video">
        <YoutubeVideo
          videoId="NjpfOif6O4E"
          strong={videoData[0].strong}
          light={videoData[0].light}
          buttontext={"Lue lisää"}
          width={"560px"}
          height={"380px"}
          color={"#79b7e2"}
        />
      </div>
      <div className="Second-video">
        <YoutubeVideo
          videoId="bI6OmpFErgw"
          light={videoData[1].light}
          buttontext={"Kokeile"}
          width={"100%"}
          height={"450px"}
          color={"#79b7e2"}
        />
      </div>
      <div className="home-page-classes">
        <CommonButton text={"Esikoulu"} color={"#FEBA3E"} />
        <CommonButton text={"Luokat 1-2"} color={"#B1DC94"} />
        <CommonButton text={"Luokat 3-4"} color={"#EFC8FB"} />
        <CommonButton text={"Luokat 5-6"} color={"#8AD5EF"} />
      </div>
      <div className="home-read-more">
        {mediaTextData.map((data, index) => (
          <>
            <MediaText
              key={data.id}
              title={data.title}
              image={data.Image}
              text={data.text}
              buttonLabel={"Lue lisää"}
            />
          </>
        ))}
      </div>
      <div className="home-empatia-polku">
        <MediaText
          title={
            "Digiseikkailun Empatiapolku on ilmainen oppimateriaali kouluille empatiataitojen vahvistamiseen ja nettikäyttäytymiseen."
          }
          image={"/images/home-empatia-polku.png"}
        />
      </div>
    </div>
  );
};
export default Home;
