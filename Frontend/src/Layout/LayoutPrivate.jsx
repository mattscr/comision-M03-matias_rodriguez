import { useAuth } from "../context/Authcontext.jsx";
import { Navigate, Outlet } from "react-router-dom";

const LayoutPrivate = () => {
  const { isAuth } = useAuth();

  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default LayoutPrivate;
