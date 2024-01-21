import CommonButton from "./CommonButton";
import PropTypes from "prop-types";

const YoutubeVideo = ({
  videoId,
  strong,
  light,
  buttontext,
  width,
  height,
  color,
}) => {
  return (
    <div className="video-text">
      <div className="video-wrapper">
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0" 
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-description">
        {strong && (
          <p>
            <strong>{strong}</strong>
          </p>
        )}
        {light && <p>{light}</p>}
        {buttontext && <CommonButton text={buttontext} color={color} />}
      </div>
    </div>
  );
};

YoutubeVideo.defaultProps = {
  width: "560",
  height: "315",
};

YoutubeVideo.propTypes = {
  videoId: PropTypes.string.isRequired,
  strong: PropTypes.string,
  light: PropTypes.string,
  buttontext: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default YoutubeVideo;
