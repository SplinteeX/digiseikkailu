import "../css/Adventuremapcomponent.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRetrieveExercises } from "../hooks/useRetrieveExercises";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";

export const AdventureMapComponent = ({ Data, url }) => {
  const { user } = useAuthContext();
  const parsedUser = JSON.parse(user);
  const { RetrieveExercises } = useRetrieveExercises();
  const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });
  const navigate = useNavigate();
  const [completedExercises, setCompletedExercises] = useState([]);

  const [isDataFetched, setIsDataFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (parsedUser && !isDataFetched) {
          const exercises = await RetrieveExercises(parsedUser._id);
          const completed = exercises.completedExercises[Data.Kategoria] || [];
          setCompletedExercises(completed);
          setIsDataFetched(true);
          console.log("Completed exercises:", completed);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error parsing user or retrieving exercises:", error);
      }
    };
    fetchData();
  }, [parsedUser, Data.Kategoria, isDataFetched, RetrieveExercises]);

  const isExerciseCompleted = (exerciseNum) => {
    return (
      completedExercises &&
      completedExercises.some((item) => item === exerciseNum)
    );
  };

  useEffect(() => {
    const mapImage = new Image();
    mapImage.src = Data.Image;
    mapImage.onload = () => {
      setMapDimensions({
        width: mapImage.naturalWidth,
        height: mapImage.naturalHeight,
      });
      if (window.innerWidth <= 1000) {
        navigate(Data.exercise);
        scroll(0, 0);
      }
      setIsLoading(false);
    };
  }, [Data.Image, navigate]);

  return (
    <div className="Adventure-map">
      <div className="Map-section">
        {Data.TextColor ? (
          <h3 style={{ color: "black" }}>{Data.Title}</h3>
        ) : (
          <h3>{Data.Title}</h3>
        )}

        <img src={Data.Image} alt="" className="map-image" />
        {isLoading ? (
          <div className="loader">
            <ClipLoader
              color="#ffffff"
              cssOverride={{
                "border-width": "5px",
              }}
              size={40}
              speedMultiplier={0.5}
            />
          </div>
        ) : (
          <div className="Balls">
            {Data.Balls.map((ball, index) => (
              <Link to={`${url}/${ball.number}`} key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1, delay: 0 }}
                  style={{
                    left: `${(ball.x / mapDimensions.width) * 100}%`,
                    top: `${(ball.y / mapDimensions.height) * 100}%`,
                  }}
                  className={`ball`}
                >
                  {isExerciseCompleted(ball.number) ? (
                    <img
                      src={`/Napit/success.png`}
                      alt={`Completed Ball ${ball.number}`}
                    />
                  ) : (
                    <>
                      {ball.Kategoria === "Peli" && (
                        <img
                          src={`/Napit/Peli-${ball.Väri}.png`}
                          alt={`Ball ${ball.number}`}
                        />
                      )}
                      {ball.Kategoria === "Tehtävä" && (
                        <img
                          src={`/Napit/Lukea-${ball.Väri}.png`}
                          alt={`Ball ${ball.number}`}
                        />
                      )}
                      {ball.Kategoria === "Tietoteksti" && (
                        <img
                          src={`/Napit/Lukea-${ball.Väri}.png`}
                          alt={`Ball ${ball.number}`}
                        />
                      )}
                      {ball.Kategoria === "Video" && (
                        <img
                          src={`/Napit/Video-${ball.Väri}.png`}
                          alt={`Ball ${ball.number}`}
                        />
                      )}
                      {ball.Kategoria === "Tarina" && (
                        <img
                          src={`/Napit/Tarina-${ball.Väri}.png`}
                          alt={`Ball ${ball.number}`}
                        />
                      )}
                    </>
                  )}

                  <p>{ball.number}.</p>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
