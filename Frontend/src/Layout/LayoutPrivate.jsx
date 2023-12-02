import { useAuth } from "../context/Authcontext.jsx";
import { Navigate, Outlet } from "react-router-dom";
const LayoutPrivate = () => {
  const { isAuth } = useAuth();

  if (!isAuth) return <Navigate to="/login" />;
  return <Outlet />;
};

export default LayoutPrivate;
