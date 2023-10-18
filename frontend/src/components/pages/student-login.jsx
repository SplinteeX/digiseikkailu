import React, { useState } from "react";
import CommonButton from "../elements/CommonButton";
import FloatInput from "../elements/FloatInput";
import "../css/studentLogin.css";
import { Link } from "react-router-dom";
export const StudentLogin = () => {
  const [user, setUser] = useState("");
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
              Type={"email"}
            ></FloatInput>
            <CommonButton text={"Kirjaudu Sisään"}></CommonButton>
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
