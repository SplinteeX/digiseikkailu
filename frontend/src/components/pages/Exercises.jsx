import { TehtäväPaketit } from "../data/TehtäväPaketit";
import { ExerciseCard } from "../elements/ExerciseCard";
import "../css/Exercises.css";
export const Exercises = () => {
  const {
    Apinmaja,
    häsänStudio,
    TweetynViestiseinä,
    DogenBoxi,
    KursorinUllakko,
    SirynÄlytalo,
  } = TehtäväPaketit();
  return (
    <div className="Exercise-cards">
      <h2 className="Title">Tehtävä maailmat</h2>
      <div className="Tehtävä-Paketit">
        <div className="Kortit">
          <ExerciseCard Data={Apinmaja[0]} />
          <ExerciseCard Data={häsänStudio[0]} />
          <ExerciseCard Data={TweetynViestiseinä[0]} />
          <ExerciseCard Data={DogenBoxi[0]} />
          <ExerciseCard Data={KursorinUllakko[0]} />
          <ExerciseCard Data={SirynÄlytalo[0]} />
        </div>
      </div>
    </div>
  );
};
