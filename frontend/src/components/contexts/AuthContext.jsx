import { createContext, useReducer, useEffect } from "react";
import cookie from "js-cookie";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload.user, role: action.payload.role };
    case "LOGOUT":
      return { user: null, role: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    role: null,
  });

  useEffect(() => {
    const user = cookie.get("User") || cookie.get("Student");

    if (user) {
      const role = JSON.parse(user).role;
      dispatch({ type: "LOGIN", payload: { user, role } });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
