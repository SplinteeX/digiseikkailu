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
        <h3>Apinmaja</h3>
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
                <img
                  src={"/src/assets/Napit/peli.png"}
                  alt={`Ball ${ball.number}`}
                />
                <p>{ball.number}.</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
