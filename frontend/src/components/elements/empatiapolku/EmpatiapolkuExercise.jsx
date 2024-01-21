import YoutubeVideo from "../elements/YoutubeVideo";
import { Link } from "react-router-dom";

export const EmpatiapolkuExercise = ({ Data }) => {
  return (
    <div>
      {Data.Kuva && (
        <div className="Image-container">
          <img className="imagefull" src={Data.Kuva} alt="Image" />
        </div>
      )}

      {Data.VideoTeht && (
        <div className="videotehtävä">
          <div className="leftSide">
            <p>TEHTÄVÄ 2</p>
            <img src="../../../assets/kissakuva" alt="Kissakuva" />
            <p>Ota selvää mistä asiasta Tweety oli huolissaan?</p>
          </div>
          <div className="rightSide">
            <video src={Data.videoUrl}></video>
          </div>
        </div>
      )}
      {Data.Tekstit && <p>{Data.Tekstit}</p>}
    </div>
  );
};
