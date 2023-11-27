import "../css/empatiapolku.css";


const SininenNappi = ({teksti}) => {
    return (
        <div className="empatiapolku-nappiwrapper">
            <div className="empatiapolku-sininennappi">
                <a href="" class="empatiapolku-sininenbutton">
                    <span>{teksti}</span>
                </a>
            </div>
        </div>
    );
}

export default SininenNappi;