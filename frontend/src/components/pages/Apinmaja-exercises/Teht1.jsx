import { ExerciseComponent } from "../../elements/ExerciseComponent";
import { ApinmajaData } from "../../data/ApinmajaData";
const Tehtävät = ApinmajaData();
console.log(Tehtävät[1]);
export const Teht1 = () => {
  return (
    <>
      <ExerciseComponent Data={Tehtävät[1]} />
    </>
  );
};
