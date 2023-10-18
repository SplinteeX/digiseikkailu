import React, { useState } from "react";
import CommonButton from "../elements/CommonButton";
import FloatInput from "../elements/FloatInput";
import { Link } from "react-router-dom";
import "../css/register.css";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="Register">
      <div className="Login-wrapper">
        <div className="Login">
          <h3>Rekisteröidy</h3>
          <div className="Login-content">
            <FloatInput
              text={"Etunimi"}
              value={firstName}
              setValue={setFirstName}
              Type={"text"}
            ></FloatInput>
            <FloatInput
              text={"Sukunimi"}
              value={lastName}
              setValue={setLastName}
              Type={"text"}
            ></FloatInput>
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
            <FloatInput
              text={"Vahvista salasana"}
              value={passwordCheck}
              setValue={setPasswordCheck}
              Type={"password"}
            ></FloatInput>
            <FloatInput
              text={"Käyttäjätunnus"}
              value={username}
              setValue={setUsername}
              Type={"text"}
            ></FloatInput>
            <div className="Register-login">
              <CommonButton text={"Rekisteröidy"}></CommonButton>
              <Link to={"/kirjaudu"}>
                <CommonButton text={"Kirjaudu"}></CommonButton>
              </Link>
            </div>
            <Link to={"/kirjaudu"}>
              <CommonButton text={"Palaa"}></CommonButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
