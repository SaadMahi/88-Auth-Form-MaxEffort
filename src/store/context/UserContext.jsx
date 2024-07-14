import { createContext, useReducer, useEffect } from "react";
import UserDataReducer from "../reducer/UserDataReducer";

const INITIAL_STATE = {
  userData:
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user")) ||
    [],
};

export const UserDataContext = createContext(INITIAL_STATE);

export const UserDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserDataReducer, INITIAL_STATE);

  useEffect(() => {
    if (state.userData.length > 0) {
      localStorage.setItem("user", JSON.stringify(state.userData));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.userData]);

  return (
    <UserDataContext.Provider value={{ userData: state.userData, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
