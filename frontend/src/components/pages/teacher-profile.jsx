import "../css/profile.css";
import PulseLoader from "react-spinners/PulseLoader";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import ProfileHeader from "./profileComponents/Profile-header";
import TeacherSection from "./profileComponents/teacherSection";
import StudentSection from "./profileComponents/studentSection";

export const Profile = () => {
  // Get user data from cookies
  const User = JSON.parse(Cookies.get("User"));

  // Authentication context
  const { role } = useAuthContext();
  return (
    <div className="Profile-wrapper">
      {role.toLowerCase() === "teacher" && (
        <div className={`Teacher-profile-wrapper`}>
          <ProfileHeader user={User} role={User.role} />
          <TeacherSection User={User} />
        </div>
      )}
      {role.toLowerCase() === "student" && (
        <>
          <StudentSection User={User} />
        </>
      )}
    </div>
  );
};
