import "../css/empatiapolku.css";
import hämis from "../../assets/hämis.webp"

const HamisTeksti = ({teksti}) => {
    return (
        <div className="hamisteksti-hamiscontainer">
            <div className="hamisteksti-tekstit">
                <p>{teksti}</p>
            </div>
            <div className="hamisteksti-hamiskuva">
                <img src={hämis} height={90} width={152}></img>
            </div>
        </div>
    );
}

export default HamisTeksti;