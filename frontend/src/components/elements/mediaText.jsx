import { Link } from "react-router-dom";

const MediaText = ({ title, image, text, buttonLabel, url }) => {
  return (
    <div className="mediaText">
      {title && <h3>{title}</h3>}
      <div className="image-container">
        {image && <img src={image} alt="" />}
        {buttonLabel && (
          <Link to={url}>
            <button>{buttonLabel}</button>
          </Link>
        )}
      </div>
      {text && <p>{text}</p>}
    </div>
  );
};
export default MediaText;
