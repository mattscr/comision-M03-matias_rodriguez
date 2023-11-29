const Navbar = () => {
  return (
    <>
      <nav className="px-6 py-4 bg-white shadow">
        <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div>
              <a
                href="#"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="https://campusvirtual.ing.unlpam.edu.ar/pluginfile.php/37478/coursecat/description/FONDO%20JPG-%20sin%20espacios.png"
                  className="h-10"
                  alt="argentina programa Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Argentina programa 4.0
                </span>
              </a>
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
            <a
              href="#"
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Home
            </a>
            <a
              href="#"
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Login
            </a>
            <a
              href="#"
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
