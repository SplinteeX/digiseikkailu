import { ExerciseComponent } from "../../elements/ExerciseComponent";
import { ApinmajaData } from "../../data/ApinmajaData";
const Tehtävät = ApinmajaData();
import { useParams } from "react-router-dom";

export const ApinmajaExercises = () => {
  const { index } = useParams();
  const exerciseIndex = parseInt(index, 10) - 1;

  return (
    <>
      <ExerciseComponent Data={Tehtävät[exerciseIndex]} />
    </>
  );
};
