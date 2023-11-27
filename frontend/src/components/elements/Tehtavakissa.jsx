import "../css/empatiapolku.css";
import kissakuva from "../../assets/kissakuva.webp"

const TehtäväKissa = ({teksti}) => {
    return (
        <div className="empatiapolku-tehtKissa">
            <div className="empatiapolku-tekstit">
                <h2>{teksti}</h2>
            </div>
            <img src={kissakuva} height={150} width={150}></img>
        </div>
    );
}

export default TehtäväKissa;