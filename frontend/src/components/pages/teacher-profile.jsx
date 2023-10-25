import SearchBar from "../elements/searchBar";
import { InfoBox } from "../elements/infoBox";
import FloatInput from "../elements/FloatInput";
import "../css/profile.css";
import { useState } from "react";
import { useCreateStudent } from "../hooks/useCreateStudent";

export const Profile = () => {
  const [create, setCreate] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const { createStudent } = useCreateStudent();
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
    {
      title: "Lorem ipsu",
    },
    {
      title: "Action",
    },
  ];
  const students = [
    {
      name: "Pekka",
      teacher: "1A3216D",
      username: "PakkaAho",
      lastonline: "1d ago",
      lorem: "Lorem",
    },
    {
      name: "Pekka",
      teacher: "1A3216D",
      username: "PakkaAho",
      lastonline: "1d ago",
      lorem: "Lorem",
    },
    {
      name: "Pekka",
      teacher: "1A3216D",
      username: "PakkaAho",
      lastonline: "1d ago",
      lorem: "Lorem",
    },
    {
      name: "Pekka",
      teacher: "1A3216D",
      username: "PakkaAho",
      lastonline: "1d ago",
      lorem: "Lorem",
    },
  ];
  const darkStyle = {
    backgroundColor: "#1E1E1E",
  };

  const handleclick = (data) => {
    console.log(data.name);
  };

  const handleCreate = () => {
    setCreate(!create);
  };
  const handleCreateStudent = () => {
    createStudent(name, username);
    setName("");
    setUsername("");
    setCreate(!create);
  };

  return (
    <div className={`Teacher-profile-wrapper`}>
      <div className="Profile-header">
        <div className="Profile-greeting">
          <h3>Hello, Pekka</h3>
          <p>Have a nice day</p>
        </div>
        <div className="Right-header">
          <div className="Notifications"></div>
          <div className="User">
            <h3>Pekka savo</h3>
            <p>Role: Teacher</p>
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
        {students.map((data, index) => (
          <div className="Student" key={index}>
            <div className="Student-info" onClick={() => handleclick(data)}>
              <h3>{data.name}</h3>
              <h3>{data.teacher}</h3>
              <h3>{data.username}</h3>
              <h3>{data.lastonline}</h3>
              <h3>{data.lorem}</h3>
              <h3>{data.lorem}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
