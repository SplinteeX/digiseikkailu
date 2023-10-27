import "../css/infoboard.css";
import close from "../../assets/close.png";
export const InfoBoard = () => {
  return (
    <div className="Infoboard-wrapper">
      <h3>Student information</h3>
      <img src={close} height={"40px"} width={"40px"} alt="" />
      <div className="Student-title-boxes">
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
      </div>
      <div className="Information-wrapper">
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
      </div>
    </div>
  );
};
