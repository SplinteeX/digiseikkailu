import "../css/infoboard.css";
import close from "../../assets/close.png";
import { useRetrieveExercises } from "../hooks/useRetrieveExercises";
import { useEffect, useState } from "react";

export const InfoBoard = ({ onClose, data }) => {
  const { RetrieveExercises } = useRetrieveExercises();

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    RetrieveExercises(data._id)
      .then((data) => {
        setExercises(data);
      })
      .catch((error) => console.error(error));
  }, [data._id]);
  console.log(exercises);
  const calculateExercises = (data) => {
    let total = 0;
    for (let category in data.completedExercises) {
      total += data.completedExercises[category].length;
    }
    return total;
  };

  return (
    <div className="Infoboard-wrapper">
      <div className="Information-wrapper">
        <img
          src={close}
          height={"40px"}
          width={"40px"}
          alt=""
          onClick={onClose}
        />
        <h3 className="Divider-text">OPISKELIJAN TIEDOT</h3>
        <div className="Boxes">
          <div className="Section">
            <p>Nimi</p>
            <p>{data.name}</p>
          </div>
          <div className="Section">
            <p>Käyttäjätunnus</p>
            <p>{data.username}</p>
          </div>
          <div className="Section">
            <p>Opettaja</p>
            <p>{data.teacherid}</p>
          </div>
          <div className="Section">
            <p>Viimeksi paikalla</p>
            <p>{new Date(data.lastonline).toLocaleString()}</p>
          </div>
        </div>
        <h3 className="Divider-text">TEHTÄVÄT</h3>
        <div className="Exercises-done">
          <h4>Tehtäviä tehty: {calculateExercises(exercises)} kpl</h4>
        </div>

        {Object.entries(data.completedExercises).map(
          ([category, exercises]) => (
            <div key={category} className="Student-exercise">
              <h4>{category}</h4>
              <div className="Completed-exercises">
                {exercises.length > 0 ? (
                  exercises.map((exercise, index) => <p>{exercise}</p>)
                ) : (
                  <p>Ei tehtäviä tehty!</p>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
