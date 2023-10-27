import CommonButton from "../elements/commonButton";
import YoutubeVideo from "../elements/YoutubeVideo";
import MediaText from "../elements/mediaText";
import "../css/home.css";

const Home = () => {
  const videoData = [
    {
      strong:
        "Hyppää mukaan hauskojen ja mielenkiintoisten tehtävien pariin...",
      light:
        "Digiseikkailussa on yli 120 erilaista tehtävää ja 23 tehtäviä tukevaa tarinaa...",
    },
    {
      light:
        "Ninni kertoo videolla, miten hän on hyödyntänyt Digiseikkailua opetuksessaan ja mitä vinkkejä hän haluaisi jakaa muille opettajille...",
    },
  ];

  const mediaTextData = [
    {
      title: "Näppäintaidot haltuun TVT-opetuksen taitopaketilla",
      Image: "/images/tvt-opetuksen-taitopaketti-home.png",
      text: "Näppäintaitokortit ovat loistava apu TVT-opetuksen perustaitojen vahvistamisessa!...",
    },
    {
      title: "Tarinat ja tehtävät -työkirja",
      Image: "/images/tarinat-ja-tehtävät-työkirja-home.png",
      text: "Tarinat ja tehtävät -työkirja tarjoaa mielenkiintoisia ja hauskoja tapoja oppia tieto- ja viestintäteknologian käsitteitä sekä vahvistaa lukemisen ja kuvittelemisen taitoja...",
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
          <MediaText
            key={index}
            title={data.title}
            image={data.Image}
            text={data.text}
            buttonLabel={"Lue lisää"}
          />
        ))}
      </div>
      <div className="home-empatia-polku">
        <MediaText
          title={
            "Digiseikkailun Empatiapolku is a free educational resource for schools to strengthen empathy skills and online behavior."
          }
          image={"/images/home-empatia-polku.png"}
        />
      </div>
    </div>
  );
};

export default Home;
