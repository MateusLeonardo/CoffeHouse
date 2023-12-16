import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login/Login";
import { Header } from "./Components/Header";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import { CartProvider } from "./Components/CartContext/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
