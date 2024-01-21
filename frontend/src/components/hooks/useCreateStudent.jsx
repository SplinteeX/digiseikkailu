import Cookies from "js-cookie";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "sonner";
export const useCreateStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user, role } = useAuthContext();
  const createStudent = async (name, username) => {
    const User = JSON.parse(user);
    const Auth = Cookies.get("Authorization");
    const teacherid = User.teacherId;
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/student/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: Auth,
          },
          body: JSON.stringify({ name, username, teacherid }),
        }
      );
      const json = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      if (response.ok) {
        toast.success("Opiskelija lisätty!");
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createStudent, isLoading, error };
};
