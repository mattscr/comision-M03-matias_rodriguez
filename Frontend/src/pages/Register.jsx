import { useForm } from "react-hook-form";
import { useAuth } from "../context/Authcontext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuth, errors: registerErrors } = useAuth();

  //redirecciona a home
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    signup(values);
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
    <div className="my-9 rounded-2xl shadow-md w-[90%] sm:w-auto mx-auto bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center sm:w-[600px] md:w-[700px] relative">
        <div className="p-4">
          <div className=" flex flex-col items-center justify-center">
            <div
              className="
    flex flex-col
    px-2
    sm:px-6
    rounded-3xl
    w-50
    max-w-md
  "
            >
              <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                Registrate
              </div>
              <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                Crea tu cuenta para compartir experiencias
              </div>
              {registerErrors.map((err, i) => (
                <div key={i} className="bg-red-800 text-white">
                  {err}
                </div>
              ))}
              <div className="mt-5">
                <form action="#">
                  {/* nombre */}
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="username"
                      className="mb-1 text-xs tracking-wide text-gray-600"
                    >
                      Nombre:
                    </label>
                    {errors.username && (
                      <span className="text-red-400 ">
                        El nombre de usuario es requerido
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
                        <i className="fas fa-user text-gray-600" />
                      </div>

                      <input
                        {...register("username", { required: true })}
                        id="username"
                        type="text"
                        className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                        placeholder="Ingresa tu nombre"
                        autoComplete="username"
                      />
                    </div>
                  </div>
                  {/* avatar */}
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="avatar"
                      className="mb-1 text-xs tracking-wide text-gray-600"
                    >
                      Avatar:
                    </label>
                    {errors.avatar && (
                      <span className="text-red-400 ">
                        El avatar es requerido
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
                        <i className="fas fa-image text-gray-600" />
                      </div>
                      <input
                        {...register("avatar", { required: true })}
                        id="avatar"
                        type="avatar"
                        className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                        placeholder="url de avatar"
                        autoComplete="avatar"
                      />
                    </div>
                  </div>
                  {/* email */}
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="email"
                      className="mb-1 text-xs tracking-wide text-gray-600"
                    >
                      E-Mail:
                    </label>
                    {errors.email && (
                      <span className="text-red-400 ">
                        El email es requerido
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
                        <i className="fas fa-at text-gray-600" />
                      </div>
                      <input
                        {...register("email", { required: true })}
                        id="email"
                        type="email"
                        className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
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
                  {/* contraseña */}
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
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
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
                      <span className="mr-2 uppercase">Crear</span>
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
                  <span className="ml-2">ya tiene una cuenta?</span>
                </a>
                <Link
                  to="/login"
                  className="text-xs ml-2 text-blue-500 font-semibold"
                >
                  Iniciar sesión
                </Link>
              </div>
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

export default Register;
