import Cookies from "js-cookie";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
export const useCreateStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user, role } = useAuthContext();
  const createStudent = async (name, username) => {
    const User = JSON.parse(user);
    const Auth = Cookies.get("Authorization");
    const teacherid = User.teacherId;
    console.log(teacherid);
    console.log(User);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/api/student/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: Auth,
        },
        body: JSON.stringify({ name, username, teacherid }),
      });
      const json = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      if (response.ok) {
        console.log("Student created");
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createStudent, isLoading, error };
};
