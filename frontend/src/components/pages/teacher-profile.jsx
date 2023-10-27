import React, { useState, useEffect } from "react";
import SearchBar from "../elements/searchBar";
import FloatInput from "../elements/FloatInput";
import { useCreateStudent } from "../hooks/useCreateStudent";
import { useGetStudents } from "../hooks/useGetStudents";
import PulseLoader from "react-spinners/PulseLoader";
import Cookies from "js-cookie";
import remove from "../../assets/remove-icon.png";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDeleteStudent } from "../hooks/useDeleteStudent";
import { studentData } from "../data/StudentData";
import { studentTitles } from "../data/StudentTitles";
import { InfoBox } from "../elements/infoBox";
import "../css/profile.css";
import { InfoBoard } from "../elements/infoBoard";

export const Profile = () => {
  const [create, setCreate] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const User = JSON.parse(Cookies.get("User"));

  const { role } = useAuthContext();
  const {
    createStudent,
    isLoading: createStudentLoading,
    error: createStudentError,
  } = useCreateStudent();
  const {
    getStudents,
    isLoading: getStudentsLoading,
    error: getStudentsError,
  } = useGetStudents();

  const deleteStudent = useDeleteStudent();

  useEffect(() => {
    getStudents(User.teacherid)
      .then((data) => {
        setStudentsData(data.students);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [User.teacherid]);

  const handleRemove = (data) => {
    setStudentsData((prevStudentsData) =>
      prevStudentsData.filter((student) => student._id !== data._id)
    );
    deleteStudent(data._id)
      .then((deleteSuccess) => {
        if (deleteSuccess) {
          console.log("Student deleted successfully");
        } else {
          console.error("Failed to delete the student.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleCreate = () => {
    setCreate(!create);
  };
  const handleCreateStudent = () => {
    createStudent(name, username);
    if (!createStudentError && !createStudentLoading) {
      setStudentsData([
        ...studentsData,
        { name, teacherid: User.teacherid, username },
      ]);
      setName("");
      setUsername("");
      setCreate(!create);
    }
  };
  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className={`Teacher-profile-wrapper`}>
      <InfoBoard />
      <div className="Profile-header">
        <div className="Profile-greeting">
          <h3>Hello, {User.firstname}</h3>
          <p>Have a nice day</p>
        </div>
        <div className="Right-header">
          <div className="Notifications"></div>
          <div className="User">
            <h3>
              {User.firstname}, {User.lastname}
            </h3>
            <p>Role: {role}</p>
          </div>
        </div>
      </div>
      {role === "teacher" && (
        <div className="Teacher-section">
          <div className="upper-mid">
            <h3>Students</h3>
            <div className="Content">
              <SearchBar
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="Add-student" onClick={handleCreate}>
                <h4>Add student</h4>
                <h3>+</h3>
              </button>
            </div>
            {create && (
              <div className="Create-student">
                <FloatInput
                  text={"Nimi"}
                  value={name}
                  setValue={setName}
                  Type={"text"}
                ></FloatInput>
                <FloatInput
                  text={"Käyttäjätunnus"}
                  value={username}
                  setValue={setUsername}
                  Type={"text"}
                ></FloatInput>
                {createStudentError && (
                  <div className="error">{createStudentError}</div>
                )}
                <PulseLoader
                  color={"#8CCBF3"}
                  loading={createStudentLoading}
                  size={10}
                />
                <button onClick={handleCreateStudent}>Luo oppilas</button>
              </div>
            )}
          </div>
          <div className="Info-section">
            {studentData.map((data, index) => (
              <div className="Info-box" key={index}>
                {InfoBox(data.title, data.content)}
              </div>
            ))}
          </div>
          <div className="Student-titles">
            {studentTitles.map((data, index) => (
              <div className="Student-title" key={index}>
                <h3>{data.title}</h3>
              </div>
            ))}
          </div>
          <div className="Student-list">
            {getStudentsLoading ? (
              <PulseLoader
                color={"#8CCBF3"}
                loading={getStudentsLoading}
                size={10}
              />
            ) : getStudentsError ? (
              <div className="error">{getStudentsError}</div>
            ) : (
              filteredStudents.map((data, index) => (
                <div className="Student" key={index}>
                  <div className="Student-info">
                    <h3>{data.name}</h3>
                    <h3>{data.teacherid}</h3>
                    <h3>{data.username}</h3>
                    <h3>{new Date(data.lastonline).toLocaleString()}</h3>{" "}
                    <div className="Remove-button">
                      <img
                        src={remove}
                        width={"25px"}
                        height={"25px"}
                        alt=""
                        onClick={() => handleRemove(data)}
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
