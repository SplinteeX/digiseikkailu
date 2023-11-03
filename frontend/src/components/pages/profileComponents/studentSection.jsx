import "../../css/studentSection.css";
import { useLogout } from "../../hooks/useLogout";
const StudentSection = ({ User }) => {
  const { logout } = useLogout();
  console.log(User);
  const handleLogoutClick = () => {
    logout();
  };
  return (
    <div className="Student-section-wrapper">
      <div className="Student-section-header">
        <h3>{User.username}</h3>
        <p>OpettajaID: {User.teacherid}</p>
        <p className="Logout" onClick={handleLogoutClick}>
          Kirjaudu ulos
        </p>
      </div>
      <div className="Task-wrapper">
        <div className="Task">
          <p>Task</p>
          <p className="text-opacity">Done: ####</p>
        </div>
        <div className="Task">
          <p>Task</p>
          <p className="text-opacity">Done: ####</p>
        </div>
        <div className="Task">
          <p>Task</p>
          <p className="text-opacity">Done: ####</p>
        </div>
        <div className="Task">
          <p>Task</p>
          <p className="text-opacity">Done: ####</p>
        </div>
        <div className="Task">
          <p>Task</p>
          <p className="text-opacity">Done: ####</p>
        </div>
        <div className="Task">
          <p>Task</p>
          <p className="text-opacity">Done: ####</p>
        </div>
      </div>
    </div>
  );
};
export default StudentSection;
