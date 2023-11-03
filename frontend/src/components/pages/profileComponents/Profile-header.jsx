import React from "react";
import { useLogout } from "../../hooks/useLogout";
const ProfileHeader = ({ user, role }) => {
  const { logout } = useLogout();
  const handleLogoutClick = () => {
    logout();
  };
  return (
    <div className="Profile-header">
      <div className="Profile-greeting">
        <h3>Hello, {user.firstname}</h3>
        <p>Have a nice day</p>
        <p className="Logout" onClick={handleLogoutClick}>
          Kirjaudu ulos
        </p>
      </div>
      <div className="Right-header">
        <div className="Notifications"></div>
        <div className="User">
          <h3>
            {user.firstname}, {user.lastname}
          </h3>

          <p>Role: {role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
