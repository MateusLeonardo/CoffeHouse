import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { AuthProvider } from "./Components/AuthContext/index.jsx";
import { makeServer } from "../server.js";

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' }); 
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);
