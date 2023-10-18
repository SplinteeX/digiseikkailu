const MediaText = ({ title, image, text, buttonLabel }) => {
  return (
    <div className="mediaText">
      {title && <h3>{title}</h3>}
      <div className="image-container">
        {image && <img src={image} alt="" />}
        {buttonLabel && <button>{buttonLabel}</button>}
      </div>
      {text && <p>{text}</p>}
    </div>
  );
};
export default MediaText;
