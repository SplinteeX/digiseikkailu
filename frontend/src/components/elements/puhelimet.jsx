import "../css/empatiapolku.css";

const Puhelimet = ({kuva}) => {
    return (
        <div className="puhelimet-image">
            <img src={kuva} alt="" width={300} height={500}></img>
        </div>
    );
}

export default Puhelimet;