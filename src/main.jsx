import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./store/context/AuthContext.jsx";
import { UserDataContextProvider } from "./store/context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserDataContextProvider>
        <BrowserRouter>
          <App />
          <Toaster position="bottom-center" />
        </BrowserRouter>
      </UserDataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
