import { useForm } from "react-hook-form";
import { useAuth } from "../context/Authcontext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, isAuth, errors: loginErrors } = useAuth();

  //redirecciona a home
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  //values almacena los datos del formulario
  const onSubmit = handleSubmit(async (values) => {
    //console.log(values);
    signin(values);
  });

  const bgImage = {
    backgroundImage: `url(https://source.unsplash.com/random?maps,travel,nature)`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="my-9 rounded-2xl shadow-md w-[90%] sm:w-auto mx-auto bg-white ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center sm:w-[600px] md:w-[700px] relative ">
        <div className="p-4">
          <div
            className="
              flex flex-col
              px-4
              sm:px-6
              py-8
              rounded-3xl
              w-50
              max-w-md
            "
          >
            <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
              Login
            </div>
            <div className="mt-4 text-center self-center text-xl sm:text-sm text-gray-800">
              Inicia sesión para compartir experiencias de tus viajes
            </div>
            {loginErrors.map((err, i) => (
              <div key={i} className="bg-red-800 text-black">
                {err}
              </div>
            ))}
            <div className="mt-10">
              <form action="#">
                <div className="flex flex-col mb-5">
                  <label
                    htmlFor="email"
                    className="mb-1 text-xs tracking-wide text-gray-600"
                  >
                    E-Mail:
                  </label>
                  {errors.email && (
                    <span className="text-red-400 ">El email es requerido</span>
                  )}
                  <div className="relative">
                    <div
                      className="
                          inline-flex
                          items-center
                          justify-center
                          absolute
                          left-0
                          top-0
                          h-full
                          w-10
                          text-black
                        "
                    >
                      <i className="fas fa-at text-gray-600" />
                    </div>
                    <input
                      {...register("email", { required: true })}
                      id="email"
                      type="email"
                      className="
              text-sm
              placeholder-black
              pl-10
              pr-4
              text-black
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                      placeholder="ingresa tu email"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="password"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    contraseña:
                  </label>
                  {errors.password && (
                    <span className="text-red-400 ">
                      Contraseña es requerido
                    </span>
                  )}
                  <div className="relative">
                    <div
                      className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            "
                    >
                      <span>
                        <i className="fas fa-lock text-gray-600" />
                      </span>
                    </div>
                    <input
                      {...register("password", { required: true })}
                      id="password"
                      type="password"
                      className="
              text-sm
              placeholder-gray-500
              pl-10
              
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              text-black
              focus:outline-none focus:border-blue-400
            "
                      placeholder="Ingresa tu contraseña"
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <button
                    onClick={onSubmit}
                    type="submit"
                    className="
            flex
            mt-2
            items-center
            justify-center
            focus:outline-none
            text-white text-sm
            sm:text-base
            bg-blue-500
            hover:bg-blue-600
            rounded-2xl
            py-2
            w-full
            transition
            duration-150
            ease-in
          "
                  >
                    <span className="mr-2 uppercase">Iniciar sesión</span>
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center items-center mt-6">
              <a
                href="#"
                target="_blank"
                className="
      inline-flex
      items-center
      text-gray-700
      font-medium
      text-xs text-center
    "
              >
                <span className="ml-2">No tiene una cuenta?</span>
              </a>
              <Link
                to="/register"
                className="text-xs ml-2 text-blue-500 font-semibold"
              >
                Registrate
              </Link>
            </div>
          </div>
        </div>
        <div
          className="hidden sm:block rounded-e-2xl sm:h-[450px]"
          style={bgImage}
        ></div>
      </div>
    </div>
  );
};

export default Login;
