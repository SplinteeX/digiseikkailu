import "../css/infoboard.css";
import close from "../../assets/close.png";

export const InfoBoard = ({ onClose, data }) => {
  console.log(data);
  const studentTitles = [
    { title: "Tasks done", text: "56" },
    { title: "Tasks done", text: "56" },
    { title: "Tasks done", text: "56" },
    { title: "Tasks done", text: "56" },
  ];

  return (
    <div className="Infoboard-wrapper">
      <h3>Student information</h3>
      <img
        src={close}
        height={"40px"}
        width={"40px"}
        alt=""
        onClick={onClose}
      />
      <div className="Student-title-boxes">
        {studentTitles.map((data) => (
          <div className="Title">
            <p>{data.title}</p>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <div className="Information-wrapper">
        <h3 className="Divider-text">OPISKELIJAN TIEDOT</h3>
        <div className="Boxes">
          <div className="Box">
            <p>Name</p>
            <p>{data.name}</p>
          </div>
          <div className="Box">
            <p>Username</p>
            <p>{data.username}</p>
          </div>
          <div className="Box">
            <p>Teacher</p>
            <p>{data.teacherid}</p>
          </div>
          <div className="Box">
            <p>Last Online</p>
            <p>{new Date(data.lastonline).toLocaleString()}</p>
          </div>
        </div>
        <h3 className="Divider-text">TEHTÄVÄ HISTORIA</h3>
        <div className="Boxes">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="Box" key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
};
