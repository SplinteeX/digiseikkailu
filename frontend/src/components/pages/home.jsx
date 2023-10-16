import CommonButton from "../elements/commonButton";
import YoutubeVideo from "../elements/YoutubeVideo";
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
    </div>
  );
};
export default Home;
