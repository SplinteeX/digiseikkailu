import React, { useState } from "react";
import CommonButton from "../elements/commonButton";
import FloatInput from "../elements/floatInput";
import { Link } from "react-router-dom";
import "../css/teacherLogin.css";
import PulseLoader from "react-spinners/PulseLoader";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";
export const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginSuccess = await login(email, password);
    if (loginSuccess) {
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="Teacher-login-wrapper">
      <div className="Login-wrapper">
        <div className="Login">
          <h3>Kirjaudu</h3>
          <div className="Login-content">
            <FloatInput
              text={"Email"}
              value={email}
              setValue={setEmail}
              Type={"email"}
            ></FloatInput>
            <FloatInput
              text={"Salasana"}
              value={password}
              setValue={setPassword}
              Type={"password"}
            ></FloatInput>
            {!isLoading ? (
              <CommonButton
                text={"Kirjaudu"}
                onClick={handleLogin}
              ></CommonButton>
            ) : (
              <PulseLoader color={"#8CCBF3"} loading={isLoading} size={10} />
            )}
            <a href="">Unohtuiko salasana?</a>
            <Link to={"/kirjaudu"}>
              <CommonButton text={"Palaa"}></CommonButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
