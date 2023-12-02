import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
const Navbar = () => {
  //debo traer isAuth para verificar si esta autenticado y ocultar o mostrar las rutas privadas
  const { signout, user, isAuth } = useAuth();
  //{isAuth ? user.username : <p>desconocido</p>}
  return (
    <>
      <nav className="px-6 py-4 bg-white shadow">
        <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div>
              <Link
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="https://campusvirtual.ing.unlpam.edu.ar/pluginfile.php/37478/coursecat/description/FONDO%20JPG-%20sin%20espacios.png"
                  className="h-10"
                  alt="argentina programa Logo"
                />
              </Link>
            </div>
            <div>
              <button
                type="button"
                className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-col hidden md:flex md:flex-row md:-mx-4">
            <Link
              to="/"
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Home
            </Link>

            {isAuth ? (
              <>
                <Link
                  to="/profile"
                  className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
                >
                  Profile
                </Link>
                <Link
                  to="/newpost"
                  className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
                >
                  Nuevo Post
                </Link>
                <Link
                  to="/"
                  onClick={() => signout()}
                  className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
                >
                  Cerrar sesion
                </Link>
                {user.username}
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
