import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./components/hooks/useAuthContext";
function ProtectedRouter({ element }) {
  const { user } = useAuthContext();
  const isAuthenticated = user;

  return isAuthenticated ? element : <Navigate to="/kirjaudu" />;
}
export default ProtectedRouter;
