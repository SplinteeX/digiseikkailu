import { motion } from "framer-motion";
import "../css/exerciseCard.css";
import { Link } from "react-router-dom";

export const ExerciseCard = ({
  Data,
  Flipped,
  handleCardFlip,
  initialAnimation,
  animateAnimation,
  transitionAnimation,
}) => {
  return (
    <motion.div
      className={`Exercise-card ${Flipped ? "is-flipped" : ""}`}
      onClick={handleCardFlip}
      initial={initialAnimation}
      animate={animateAnimation}
      transition={transitionAnimation}
    >
      {!Flipped && (
        <div className="Inner-section">
          <motion.div className="Card-front" transition={{ duration: 0.5 }}>
            <img src={Data.Image} alt="" />
            <div className="Text-section">
              <h3>{Data.Title}</h3>
              <h3>{Data.Time}</h3>
              <Link to={Data.Link}>
                <button className="Aloita-nappi">Aloita</button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
      {Flipped && (
        <motion.div
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.5 }}
          className="Card-back"
        >
          <p>{Data.Back}</p>
        </motion.div>
      )}
    </motion.div>
  );
};
