import React, { useState } from "react";
import CommonButton from "../elements/CommonButton";
import FloatInput from "../elements/FloatInput";
import "../css/studentLogin.css";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
export const StudentLogin = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
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
            {!loading ? (
              <CommonButton text={"Kirjaudu"}></CommonButton>
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
