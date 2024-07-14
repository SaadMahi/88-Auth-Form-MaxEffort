import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../store/context/AuthContext";

const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const user = sessionStorage.getItem("user");

  return currentUser || user ? children : <Navigate to="/sign-in" />;
};

export default RequireAuth;
