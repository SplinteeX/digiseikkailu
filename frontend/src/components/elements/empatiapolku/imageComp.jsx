const ImageComp = ({ kuva, width }) => {
  return (
    <div className="imageComp-image">
      <img src={kuva} alt="" width={width} />
    </div>
  );
};

export default ImageComp;
