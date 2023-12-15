import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const LayoutPublic = () => {
  const bgImage = {
    backgroundImage: `url(https://source.unsplash.com/random?travel)`,
  };
  //rutas publicas que se van a mostrar
  return (
    <>
      <div
        className="flex flex-col min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-white/50"
        style={bgImage}
      >
        <Navbar />
        <p>publicas</p>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LayoutPublic;
