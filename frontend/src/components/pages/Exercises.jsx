import { TehtäväPaketit } from "../data/TehtäväPaketit";
import { ExerciseCard } from "../elements/ExerciseCard";
import { useState } from "react";
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

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardFlip = (index) => {
    if (flippedIndex === index) {
      // Clicked on the same flipped card, unflip it
      setFlippedIndex(null);
    } else {
      // Flip the clicked card
      setFlippedIndex(index);
    }
  };

  return (
    <div className="Exercise-cards">
      <h2 className="Title">Tehtävä maailmat</h2>
      <div className="Tehtävä-Paketit">
        <div className="Kortit">
          {[
            Apinmaja[0],
            häsänStudio[0],
            TweetynViestiseinä[0],
            DogenBoxi[0],
            KursorinUllakko[0],
            SirynÄlytalo[0],
          ].map((exercise, index) => (
            <ExerciseCard
              key={index}
              Data={exercise}
              Flipped={flippedIndex === index}
              handleCardFlip={() => handleCardFlip(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
