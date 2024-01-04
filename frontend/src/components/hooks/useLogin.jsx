import { useState } from "react";
import cookie from "js-cookie";
import { useAuthContext } from "./useAuthContext";
import { toast } from "sonner";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
        toast.error(json.error);
      }

      if (response.ok) {
        const user = json.user;
        toast.success("Kirjautuminen onnistui!");
        const token = user.token;
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

        console.log(token, "Login successful");
        dispatch({ type: "LOGIN", payload: json });
        return true;
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
