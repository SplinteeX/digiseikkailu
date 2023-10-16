import arrow from "../../assets/arrow-linear.png";
import "../elements/commonButton.css";

const CommonButton = ({ text, onClick, color }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className="CommonButton" style={buttonStyle} onClick={onClick}>
      {text}
      <img src={arrow} alt="" />
    </button>
  );
};

export default CommonButton;
