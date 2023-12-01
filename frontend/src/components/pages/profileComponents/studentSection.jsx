import "../../css/studentSection.css";
import { useLogout } from "../../hooks/useLogout";
const StudentSection = ({ User }) => {
  const { logout } = useLogout();
  const user = JSON.parse(User);
  const handleLogoutClick = () => {
    logout();
  };
  return (
    <div className="Student-section-wrapper">
      <div className="Student-section-header">
        <h3>{user.username}</h3>
        <p>OpettajaID: {user.teacherid}</p>
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
