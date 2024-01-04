import React, { useState } from "react";
import CommonButton from "../elements/CommonButton";
import { useNavigate } from "react-router-dom";
import FloatInput from "../elements/FloatInput";
import { Link } from "react-router-dom";
import "../css/register.css";
import PulseLoader from "react-spinners/PulseLoader";
import { useSignup } from "../hooks/useSignup";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [username, setUsername] = useState("");

  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const signupSucess = await signup(
      firstName,
      lastName,
      email,
      password,
      passwordCheck,
      username
    );
    if (signupSucess) {
      navigate("/");
      window.location.reload();
    }
  };
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
              text={"Vahvista-salasana"}
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
              {!isLoading ? (
                <CommonButton
                  text={"Rekisteröidy"}
                  onClick={handleSubmit}
                ></CommonButton>
              ) : (
                <PulseLoader color={"#8CCBF3"} loading={isLoading} size={10} />
              )}
              <Link to={"/kirjaudu"}>
                <CommonButton text={"Kirjaudu"}></CommonButton>
              </Link>
              <Link to={"/kirjaudu"}>
                <CommonButton text={"Palaa"}></CommonButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
