import React, { useState } from "react";
import CommonButton from "../elements/CommonButton";
import FloatInput from "../elements/FloatInput";
import { Link } from "react-router-dom";
import "../css/teacherLogin.css";
import PulseLoader from "react-spinners/PulseLoader";

import { useLogin } from "../hooks/useLogin";
export const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleLogin = async () => {
    await login(email, password);
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
            {error && <div className="error">{error}</div>}
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
