import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === true) {
    return children;
  } else if (isLoggedIn === false) {
    return <Navigate to="/login" />;
  } else {
    <></>;
  }
};

export default ProtectedRoute;
