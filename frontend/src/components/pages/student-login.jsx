import React, { useState } from "react";
import CommonButton from "../elements/CommonButton";
import FloatInput from "../elements/FloatInput";
import "../css/studentLogin.css";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { useNavigate } from "react-router-dom";

import { useStudentLogin } from "../hooks/useStudentLogin";

export const StudentLogin = () => {
  const [user, setUser] = useState("");
  const [teacherid, setTeacherid] = useState("");
  const [loading, setLoading] = useState(false);
  const { studentLogin, isLoading, error } = useStudentLogin();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginSuccess = await studentLogin(user, teacherid);
    if (loginSuccess) {
      navigate("/");
    }
  };
  return (
    <div className="Student-login-wrapper">
      <div className="Login-wrapper">
        <div className="Login">
          <h3>Kirjaudu</h3>
          <div className="Login-content">
            <FloatInput
              text={"Käyttäjätunnus"}
              value={user}
              setValue={setUser}
              Type={"text"}
            ></FloatInput>
            <FloatInput
              text={"Teacherid"}
              value={teacherid}
              setValue={setTeacherid}
              Type={"text"}
            ></FloatInput>
            {!loading ? (
              <CommonButton
                text={"Kirjaudu"}
                onClick={handleLogin}
              ></CommonButton>
            ) : (
              <PulseLoader color={"#8CCBF3"} loading={loading} size={10} />
            )}
            <p>Unohtuiko käyttäjätunnus? Ei huolta, saat sen opettajaltasi.</p>
            <Link to={"/kirjaudu"}>
              <CommonButton text={"Palaa"}></CommonButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
