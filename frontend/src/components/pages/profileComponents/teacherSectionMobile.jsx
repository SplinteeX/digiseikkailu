import ProfileHeader from "./Profile-header";
import Search from "../../../assets/greySearch.png";
import "../../css/teacherProfileMobile.css";
import React, { useState, useEffect } from "react";
import { useGetStudents } from "../../hooks/useGetStudents";
import { useCreateStudent } from "../../hooks/useCreateStudent";
import { useDeleteStudent } from "../../hooks/useDeleteStudent";
import remove from "../../../assets/remove-icon.png";

export const TeacherSectionMobile = ({ user }) => {
  const User = JSON.parse(user);
  const [create, setCreate] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = () => setSearch(!search);
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

  useEffect(() => {
    getStudents(User.teacherId)
      .then((data) => setStudentsData(data.students))
      .catch((error) => console.error(error));
  }, [User.teacherId]);

  const handleRemove = (data) => {
    setStudentsData((prevStudentsData) =>
      prevStudentsData.filter((student) => student._id !== data._id)
    );
    deleteStudent(data._id)
      .then((deleteSuccess) => {
        setSelectedUser(null);
        if (deleteSuccess) {
          console.log("Student deleted successfully");
        } else {
          return;
        }
      })
      .catch((error) => console.error(error));
  };

  const handleCreate = () => setCreate(!create);

  const handleCreateStudent = () => {
    createStudent(name, username);
    if (!createStudentError && !createStudentLoading) {
      setStudentsData([
        ...studentsData,
        { name, teacherid: User.teacherId, username },
      ]);
      setName("");
      setUsername("");
      setCreate(!create);
    }
  };
  const closeStudent = () => setSelectedUser(null);
  const handleStudentDetails = (data) => setSelectedUser(data);

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const deleteStudent = useDeleteStudent();
  return (
    <div className="Teacher-mobile">
      {selectedUser ? (
        <div className="Selected-user">
          <img
            src={remove}
            width={"25px"}
            height={"25px"}
            alt=""
            onClick={closeStudent}
          />
          <div>Name: {selectedUser.name}</div>
          <div>
            Last online: {new Date(selectedUser.lastonline).toLocaleString()}
          </div>
          <div>Username: {selectedUser.username}</div>
          <div>TeacherId: {selectedUser.name}</div>
          <button onClick={() => handleRemove(selectedUser)}>Remove</button>
        </div>
      ) : create ? (
        <div className="Create">
          <img
            src={remove}
            alt=""
            width={"25px"}
            height={"25px"}
            onClick={handleCreate}
          />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleCreateStudent}>Create</button>
        </div>
      ) : (
        <>
          <ProfileHeader user={User} role={User.role} />
          <div className="Main-nav">
            <div className="Add-student" onClick={handleCreate}>
              +
            </div>
            <h3>Students</h3>
            <img
              src={Search}
              onClick={handleSearch}
              alt=""
              width={"25px"}
              height={"25px"}
            />
          </div>
          {search && (
            <div className="Search">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
          <div className="Student-list">
            {filteredStudents.map((data, index) => (
              <div
                className={`Student ${data.active}`}
                onClick={() => handleStudentDetails(data)}
                key={index}
              >
                <h3>{data.name}</h3>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
