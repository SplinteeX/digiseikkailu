import { useState } from "react";
import cookie from "js-cookie";
import { useAuthContext } from "./useAuthContext";
export const useSignup = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (
    firstname,
    lastname,
    email,
    password,
    passwordCheck,
    userName
  ) => {
    if (password !== passwordCheck) {
      setIsLoading(false);
      return setError("Passwords do not match");
    }
    const response = await fetch("http://localhost:8080/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        userName,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      const token = json.token;
      setError(null);
      const twelveHoursFromNow = new Date();
      twelveHoursFromNow.setHours(twelveHoursFromNow.getHours() + 12);

      cookie.set("Authorization", `Bearer ${token}`, {
        expires: twelveHoursFromNow,
      });
      setIsLoading(false);
      dispatch({ type: "LOGIN", payload: json });
      console.log("Signup successful", token);
    }
  };
  return { signup, error, isLoading };
};
