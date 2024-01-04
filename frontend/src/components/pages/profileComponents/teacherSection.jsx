import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PulseLoader from "react-spinners/PulseLoader";
import FloatInput from "../../elements/FloatInput";
import SearchBar from "../../elements/searchBar";
import { useCreateStudent } from "../../hooks/useCreateStudent";
import { useGetStudents } from "../../hooks/useGetStudents";
import { useDeleteStudent } from "../../hooks/useDeleteStudent";
import { studentData } from "../../data/StudentData";
import { studentTitles } from "../../data/StudentTitles";
import { InfoBox } from "../../elements/infoBox";
import remove from "../../../assets/remove-icon.png";
import { InfoBoard } from "../../elements/infoBoard";
import ProfileHeader from "./Profile-header";

const TeacherSection = ({ User }) => {
  const user = JSON.parse(User);
  // State variables
  const [create, setCreate] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  // Custom hooks for creating and retrieving students
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

  // Custom hook for deleting a student
  const deleteStudent = useDeleteStudent();

  // Retrieve and set student data on component mount
  useEffect(() => {
    getStudents(user.teacherId)
      .then((data) => {
        setStudentsData(data.students);
      })
      .catch((error) => console.error(error));
  }, [user.teacherId]);

  // Handle removal of a student
  const handleRemove = (data) => {
    setStudentsData((prevStudentsData) =>
      prevStudentsData.filter((student) => student._id !== data._id)
    );
    deleteStudent(data._id)
      .then((deleteSuccess) => {
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
        { name, teacherid: user.teacherId, username },
      ]);
      setName("");
      setUsername("");
      setCreate(!create);
    }
  };
  const handleStudentDetails = (data) => setSelectedUser(data);

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Teacher-section">
      {selectedUser ? (
        <InfoBoard onClose={() => setSelectedUser(null)} data={selectedUser} />
      ) : (
        <>
          <ProfileHeader user={user} role={user.role} />
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
              <motion.div
                className="Create-student"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
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
              </motion.div>
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
                <motion.div
                  className={`Student ${data.active}`}
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="Student-info">
                    <h3 onClick={() => handleStudentDetails(data)}>
                      {data.name}
                    </h3>
                    <h3 onClick={() => handleStudentDetails(data)}>
                      {data.teacherid}
                    </h3>
                    <h3 onClick={() => handleStudentDetails(data)}>
                      {data.username}
                    </h3>
                    <h3 onClick={() => handleStudentDetails(data)}>
                      {new Date(data.lastonline).toLocaleString()}
                    </h3>
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
                </motion.div>
              ))
            )}
            ;
          </div>
        </>
      )}
    </div>
  );
};

export default TeacherSection;
