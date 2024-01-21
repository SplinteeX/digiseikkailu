import { useState } from "react";
import Cookies from "js-cookie";
export const useGetStudents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getStudents = async (teacherid) => {
    const Auth = Cookies.get("Authorization");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:8080/api/student/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: Auth,
          },
          body: JSON.stringify({ teacherid }),
        }
      );
      const json = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      if (response.ok) {
        return json;
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return { getStudents, isLoading, error };
};
