import "../css/suuntamerkki.css";
const SuuntaMerkki = ({ kuva, teksti }) => {
  return (
    <div className="suuntamerkki-right-side">
      <div className="suuntamerkki-upper">
        <img src={kuva} alt="Image Alt Text" />
      </div>
      <div className="suuntamerkki-lower">
        <h2>{teksti}</h2>
      </div>
    </div>
  );
};

export default SuuntaMerkki;
