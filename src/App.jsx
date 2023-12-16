import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login/Login";
import { Header } from "./Components/Header";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import { CartProvider } from "./Components/CartContext/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cart } from "./Pages/Cart/Cart";
import {Footer} from "./Components/Footer"

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
          <Route path="/carrinho" element={<Cart/>}/>
        </Routes>
        <Footer />
      </CartProvider>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
