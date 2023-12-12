import { ExerciseComponent } from "../../elements/ExerciseComponent";
import { ApinmajaData } from "../../data/ApinmajaData";
const Tehtävät = ApinmajaData();
export const Teht1 = () => {
  return (
    <>
      <ExerciseComponent Data={Tehtävät[1]} />
    </>
  );
};
