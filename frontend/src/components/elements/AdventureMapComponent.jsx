import "../css/Adventuremapcomponent.css";
import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

export const AdventureMapComponent = ({ Data, url }) => {
  const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const mapImage = new Image();
    mapImage.src = Data.Image;
    mapImage.onload = () => {
      setMapDimensions({
        width: mapImage.naturalWidth,
        height: mapImage.naturalHeight,
      });
      if (window.innerWidth <= 1000) {
        navigate("/tehtävät");
      }
    };
  }, [Data.Image]);

  return (
    <div className="Adventure-map">
      <div className="Map-section">
        <h3>{Data.Title}</h3>
        <img src={Data.Image} alt="" className="map-image" />
        <div className="balls">
          {Data.Balls.map((ball, index) => (
            <Link to={`${url}/${ball.number}`} key={index}>
              <div
                style={{
                  left: `${(ball.x / mapDimensions.width) * 100}%`,
                  top: `${(ball.y / mapDimensions.height) * 100}%`,
                }}
                className="ball"
              >
                {ball.Kategoria === "Peli" && (
                  <img
                    src={`/src/assets/Napit/Peli-${ball.Väri}.png`}
                    alt={`Ball ${ball.number}`}
                  />
                )}
                {ball.Kategoria === "Tehtävä" && (
                  <img
                    src={`/src/assets/Napit/Lukea-${ball.Väri}.png`}
                    alt={`Ball ${ball.number}`}
                  />
                )}
                {ball.Kategoria === "Tietoteksti" && (
                  <img
                    src={`/src/assets/Napit/Lukea-${ball.Väri}.png`}
                    alt={`Ball ${ball.number}`}
                  />
                )}
                {ball.Kategoria === "Video" && (
                  <img
                    src={`/src/assets/Napit/Video-${ball.Väri}.png`}
                    alt={`Ball ${ball.number}`}
                  />
                )}
                {ball.Kategoria === "Tarina" && (
                  <img
                    src={`/src/assets/Napit/Tarina-${ball.Väri}.png`}
                    alt={`Ball ${ball.number}`}
                  />
                )}
                <p>{ball.number}.</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
