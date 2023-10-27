import CommonButton from "../elements/commonButton";
import "../css/login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="Login-wrapper">
      <div className="Login">
        <h3>Kirjaudu</h3>
        <div className="Login-content">
          <Link to={"/kirjaudu/oppilas"}>
            <CommonButton text={"Oppilas"}></CommonButton>
          </Link>
          <Link to={"/kirjaudu/opettaja"}>
            <CommonButton text={"Opettaja"}></CommonButton>
          </Link>
          <p className="No-account">
            Ei vielä tiliä? Liity nyt 3-kuukauden ilmaiseen kokeiluun!
          </p>
          <Link to={"/rekisteröidy"}>
            <CommonButton text={"Rekisteröidy"}></CommonButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
