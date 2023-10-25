import React, { useState, useEffect } from "react";
import SearchBar from "../elements/searchBar";
import { InfoBox } from "../elements/infoBox";
import FloatInput from "../elements/FloatInput";
import "../css/profile.css";
import { useCreateStudent } from "../hooks/useCreateStudent";
import { useGetStudents } from "../hooks/useGetStudents";
import PulseLoader from "react-spinners/PulseLoader";
import Cookies from "js-cookie";

export const Profile = () => {
  const [create, setCreate] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const User = JSON.parse(Cookies.get("User"));
  const [dataFetched, setDataFetched] = useState(false);
  const [studentsData, setStudentsData] = useState([]);

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

  const data = [
    {
      title: "Students",
      content: "42",
    },
    {
      title: "Tasks done",
      content: "394",
    },
    {
      title: "Lorem ipsum",
      content: "504",
    },
    {
      title: "Lorem ipsum",
      content: "100",
    },
  ];
  const studentTitles = [
    {
      title: "Name",
    },
    {
      title: "Teacher",
    },
    {
      title: "Username",
    },
    {
      title: "Online",
    },
  ];
  useEffect(() => {
    getStudents(User.teacherid)
      .then((data) => {
        setStudentsData(data.students);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [User.teacherid]);

  const handleclick = (data) => {
    console.log(data.name);
  };

  const handleCreate = () => {
    setCreate(!create);
  };
  const handleCreateStudent = () => {
    createStudent(name, username);
    if (!error === false && !isLoading === true) {
      setName("");
      setUsername("");
      setCreate(!create);
    }
  };
  return (
    <div className={`Teacher-profile-wrapper`}>
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
            <p>Role: {User.role}</p>
          </div>
        </div>
      </div>
      <div className="upper-mid">
        <h3>Students</h3>
        <div className="Content">
          <SearchBar query="Search"></SearchBar>
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
            {createStudentError && <div className="error">{error}</div>}
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
        {data.map((data, index) => (
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
          <div className="error">{error}</div>
        ) : (
          studentsData.map((data, index) => (
            <div className="Student" key={index}>
              <div className="Student-info" onClick={() => handleclick(data)}>
                <h3>{data.name}</h3>
                <h3>{data.teacherid}</h3>
                <h3>{data.username}</h3>
                <h3>{data.lastonline}</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
