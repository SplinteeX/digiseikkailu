import "../css/profile.css";
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import ProfileHeader from "./profileComponents/Profile-header";
import TeacherSection from "./profileComponents/teacherSection";
import StudentSection from "./profileComponents/studentSection";
import { TeacherSectionMobile } from "./profileComponents/teacherSectionMobile";

export const Profile = () => {
  // Authentication context
  const { user, role } = useAuthContext();
  return (
    <div className="Profile-wrapper">
      {role.toLowerCase() === "teacher" && (
        <div className={`Teacher-profile-wrapper`}>
          <TeacherSection User={user} />
          <TeacherSectionMobile user={user} />
        </div>
      )}
      {role === "Student" && (
        <>
          <StudentSection User={user} />
        </>
      )}
    </div>
  );
};
