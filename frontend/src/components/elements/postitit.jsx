import "../css/empatiapolku.css";

const Postit = ({kuva}) => {
    return (
        <div className="viestis">
            <img src={kuva} height={270} width={270}></img>
        </div>
    );
}

export default Postit;