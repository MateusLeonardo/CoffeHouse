import React from "react";
import { Home } from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Header } from "./Components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
