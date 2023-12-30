import { ExerciseComponent } from "../../elements/ExerciseComponent";
import { OhjelmointiData } from "../../data/OgjelmointiData";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const OhjelmointiExercises = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const exerciseIndex = parseInt(index, 10) - 1;
  const Tehtävät = OhjelmointiData();

  useEffect(() => {
    if (
      isNaN(exerciseIndex) ||
      exerciseIndex < 0 ||
      exerciseIndex >= Tehtävät.length
    ) {
      navigate("/404");
    }
  }, [navigate, exerciseIndex, Tehtävät.length]);

  if (
    isNaN(exerciseIndex) ||
    exerciseIndex < 0 ||
    exerciseIndex >= Tehtävät.length
  ) {
    return null;
  }

  return (
    <>
      <ExerciseComponent
        Data={Tehtävät[exerciseIndex]}
        Tehtävät={Tehtävät}
        url="ohjelmointi"
      />
    </>
  );
};
