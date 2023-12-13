import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

const Navbar = () => {
  const { signout, user, isAuth } = useAuth();

  return (
    <>
      <main className="shadow-lg bg-white/70 backdrop-blur-sm sticky top-0 z-10 w-full">
        <div className="container">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-gray-800 text-3xl font-bold">
              <img
                src="https://campusvirtual.ing.unlpam.edu.ar/pluginfile.php/37478/coursecat/description/FONDO%20JPG-%20sin%20espacios.png"
                className="h-10"
                alt="argentina programa Logo"
              />
            </Link>
            <div className="">
              <ul className="flex font-semibold  justify-center items-center gap-4">
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                  >
                    Home
                  </Link>
                </li>
                {isAuth ? (
                  <>
                    <li>
                      <Link
                        to="/profile"
                        className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                      >
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/newpost"
                        className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                      >
                        Nuevo post
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/"
                        onClick={() => signout()}
                        className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                      >
                        Logout
                      </a>
                    </li>
                    <li className="flex items-center">
                      <img
                        src={user.avatar}
                        alt="avatar user"
                        className="w-10 h-10 rounded"
                      />
                      <p className="pl-2 text-gray-900">{user.username}</p>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Navbar;
