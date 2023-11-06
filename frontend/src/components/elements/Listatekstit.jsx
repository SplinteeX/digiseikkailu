import oikeinmerkki from "../../assets/Oikeinmerkki.webp";
import "../css/empatiapolku.css";

const Oikeinmerkki = ({teksti}) => {
    return (
        <div className="oikeinmerkki">
            <img src={oikeinmerkki} height={52} width={52}></img>
            <div className="oikeinmerkkiteksti">
                <h3>{teksti}</h3>
            </div>
        </div>
    );
}

export default Oikeinmerkki;