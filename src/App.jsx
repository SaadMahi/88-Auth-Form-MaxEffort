import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import { useContext } from "react";
import RequireAuth from "./hoc/RequireAuth";
import { AuthContext } from "./store/context/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const user = sessionStorage.getItem("user");

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="sign-in"
          element={currentUser || user ? <Navigate to="/home" /> : <SignIn />}
        />

        <Route
          path="home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          index
          element={<Navigate to={currentUser || user ? "/home" : "/sign-in"} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
