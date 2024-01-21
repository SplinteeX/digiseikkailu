import { useState } from "react";
import cookie from "js-cookie";
import { useAuthContext } from "./useAuthContext";
import { toast } from "sonner";
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
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/api/user/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          userName,
        }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      toast.error(json.error);
    }
    if (response.ok) {
      toast.success("Rekisteröityminen onnistui!");
      const user = json.user;
      const token = user.token;
      setError(null);
      const twelveHoursFromNow = new Date();
      twelveHoursFromNow.setHours(twelveHoursFromNow.getHours() + 12);

      cookie.set("Authorization", `Bearer ${token}`, {
        expires: twelveHoursFromNow,
      });

      cookie.set(
        "User",
        JSON.stringify({
          firstname: user.firstname,
          lastname: user.lastname,
          role: user.role,
          email: user.email,
          teacherid: user.teacherid,
        }),
        {
          expires: twelveHoursFromNow,
        }
      );

      setIsLoading(false);
      dispatch({ type: "LOGIN", payload: json });
      console.log("Signup successful", token);
      return true;
    }
  };
  return { signup, error, isLoading };
};
