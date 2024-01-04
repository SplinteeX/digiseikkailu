import React, { useContext } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "sonner";

export const useLogout = () => {
  const { dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    Cookies.remove("User");
    Cookies.remove("Student");
    Cookies.remove("Authorization");
    toast.succes("Kirjauduit ulos!");
  };

  return { logout };
};
