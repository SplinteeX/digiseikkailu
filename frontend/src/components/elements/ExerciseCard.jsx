import "../css/exerciseCard.css";
import { Link } from "react-router-dom";
export const ExerciseCard = (Data) => {
  console.log(Data);
  return (
    <div className="Exercise-card">
      <div className="Inner-section">
        <img src={Data.Data.Image} alt="" />
        <div className="Text-section">
          <h3>{Data.Data.Title}</h3>
          <h3>{Data.Data.Time}</h3>
          <Link to={Data.Data.Link}>
            <button className="Aloita-nappi">Aloita</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
