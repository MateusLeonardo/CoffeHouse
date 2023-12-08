import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login/Login";
import { Header } from "./Components/Header";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { AuthProvider, useAuth } from "./Components/AuthContext";


const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          {isLoggedIn ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/dashboard" element={<Navigate to="/login" /> } />
          )}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
