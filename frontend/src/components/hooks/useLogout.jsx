import React, { useContext } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../contexts/AuthContext";

export const useLogout = () => {
  const { dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    Cookies.remove("User");
    Cookies.remove("Student");
    Cookies.remove("Authorization");
  };

  return { logout };
};
