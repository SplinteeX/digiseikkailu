import { useState } from "react";
import cookie from "js-cookie";
import { useAuthContext } from "./useAuthContext";
import { toast } from "sonner";

export const useStudentLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const studentLogin = async (username, teacherid) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/student/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, teacherid }),
        }
      );
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
        toast.error(json.error);
      }

      if (response.ok) {
        const student = json.student;
        toast.success("Kirjautuminen onnistui!");
        console.log(json);
        const token = student.token;
        const twelveHoursFromNow = new Date();
        twelveHoursFromNow.setHours(twelveHoursFromNow.getHours() + 12);
        cookie.set("Authorization", `Bearer ${token}`, {
          expires: twelveHoursFromNow,
        });
        cookie.set(
          "User",
          JSON.stringify({
            username: student.username,
            teacherid: student.teacherid,
            role: student.role,
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

  return { studentLogin, isLoading, error };
};
