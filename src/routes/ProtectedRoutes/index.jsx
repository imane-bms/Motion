import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLoggedInRedux = useSelector((state) => state.user.token);
  const isLoggedInLocal = Boolean(localStorage.getItem("token"));

  // Check for the token in both Redux and localStorage
  const isLoggedIn = isLoggedInRedux || isLoggedInLocal;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
