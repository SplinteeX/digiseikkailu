import "../css/teacherinfo.css";
import CommonButton from "../elements/commonButton";
import ButtonText from "../elements/buttonText";
import GameInfoWImg from "../data/GameInfoWImg";
import info from "../data/info";
const Teacherinfo = () => {
  const infoTexts = [
    {
      text: "Digiseikkailu on pelillinen ja tarinallinen oppimisympäristö tieto- ja viestintätekniikan (TVT), medialukutaitojen sekä empatiataitojen opettamiseen esi- sekä alakouluikäisille. Klikkaa haluamaasi ikäryhmää ja tutustu ikäryhmälle suunnattuihin tehtäviin. Iloista seikkailua!",
    },
    {
      text: "Materiaalin tehtäviin ja tarinoihin tutustumalla ja yhdessä pohtimalla voidaan harjoitella medialukutaidon, nettiempatian ja perus tvt-taitojen teemoja ja käsitteistöä.",
    },
  ];
  const textData = [
    {
      text: "Digiseikkailu säästää opettajan työaikaa, tukee käytännön opetustyötä pedagogisesti valmiiksi mietittynä ratkaisuna ja mahdollistaa opetussuunnitelman mukaisen, tasalaatuisen kokonaisratkaisun kaikille opettajille.",
    },
    {
      text: "Hauskaa, helppoa ja ohjaavaa oppimista 6-12-vuotiaille.",
    },
    {
      text: "Voidaan myös integroida mihin tahansa oppiaineeseen osaksi ilmiöpohjaista oppimista.",
    },
    {
      text: "Digiseikkailusta löydät kattavaa materiaalia opetuksen tueksi. ",
    },
  ];
  return (
    <div className="Teacherinfo-wrapper">
      <div className="Teacherinfo-video">
        <video
          src="/teacher-info/Tietoa-opettajalle-video.mp4"
          controls
          autoPlay
        ></video>
        <div className="Info-text">
          <strong>
            <p>{infoTexts[0].text}</p>
          </strong>
        </div>
      </div>
      <div className="Teacherinfo-text">
        {textData.map((data, index) => (
          <ul key={index}>
            <strong>
              <li>{data.text}</li>
            </strong>
          </ul>
        ))}
      </div>
      <div className="Info text">
        <strong>
          <p>{infoTexts[1].text}</p>
        </strong>
      </div>
      <div className="Level-buttons">
        <CommonButton
          text={"Tehtävät ja tavoitteet esikoulu"}
          color={"#FEBA3E"}
        />
        <CommonButton
          text={"Tehtävät ja tavoitteet 1-2 lk"}
          color={"#B1DC94"}
        />
        <CommonButton
          text={"Tehtävät ja tavoitteet 3-4 lk"}
          color={"#EFC8FB"}
        />
        <CommonButton
          text={"Tehtävät ja tavoitteet 5-6 lk"}
          color={"#8AD5EF"}
        />
      </div>
      <div className="Teacher-material">
        <h3>Opettajan materiaali</h3>
      </div>
      <div className="teacher-buttons">
        {info.map((data, index) => (
          <ButtonText
            key={index}
            color={"#8AD4EE"}
            text={data.text}
            paragraph={data.paragraph}
          />
        ))}
      </div>
      <div className="Teacher-material">
        <h3>Opettajan sivut tehtävämaailmoihin</h3>
      </div>
      <div className="teacher-buttons">
        {GameInfoWImg.map((data, index) => (
          <ButtonText
            key={index}
            img={data.img}
            color={"#8AD4EE"}
            text={data.text}
            paragraph={data.paragraph}
          />
        ))}
      </div>
    </div>
  );
};
export default Teacherinfo;
