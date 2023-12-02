import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const LayoutPublic = () => {
  //rutas publicas que se van a mostrar
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default LayoutPublic;
