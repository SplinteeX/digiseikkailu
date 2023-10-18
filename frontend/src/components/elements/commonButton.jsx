import arrow from "../../assets/arrow.svg";
import "../elements/commonButton.css";

const CommonButton = ({ text, onClick, color }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className="CommonButton" style={buttonStyle} onClick={onClick}>
      {text}
      <img src={arrow} width={"40px"} height={"40px"} alt="" />
    </button>
  );
};

export default CommonButton;
