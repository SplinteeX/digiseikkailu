import { useState } from "react";
import cookie from "js-cookie";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }

      if (response.ok) {
        const user = json.user;
        const token = user.token;
        const twelveHoursFromNow = new Date();
        twelveHoursFromNow.setHours(twelveHoursFromNow.getHours() + 12);
        console.log(user);
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
          }),
          {
            expires: twelveHoursFromNow,
          }
        );

        console.log(token, "Login successful");
        dispatch({ type: "LOGIN", payload: json });
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
