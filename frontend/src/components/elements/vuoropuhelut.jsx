import "../css/empatiapolku.css";

const Vuoropuhelu = ({teksti, kuva}) => {
    return (
        <div className="vuoropuhelu">
            <img src={kuva} height={152} width={152}></img>
            <div className="tekstit">
                <h3>- {teksti}</h3>
            </div>
        </div>
    );
}

export default Vuoropuhelu;