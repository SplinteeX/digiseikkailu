import { createContext, useReducer, useEffect } from "react";
import cookie from "js-cookie";
import { useGetUser } from "../hooks/useGetUser";

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
    const { GetUser } = useGetUser();
    const testUser = GetUser();
    testUser.then((user) => {
      if (user && user.user) {
        const data = user.user;
        const role = data.role;
        const stringifiedUser = JSON.stringify(data);

        dispatch({ type: "LOGIN", payload: { user: stringifiedUser, role } });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
