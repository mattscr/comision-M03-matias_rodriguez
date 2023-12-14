/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { usePost } from "../context/PostContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { createPost, getPostById, updatePost } = usePost();

  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    // console.log(params);
    async function loadPost() {
      if (params.id) {
        //console.log("datos...");
        const post = await getPostById(params.id);
        //console.log(post);
        //el setValue del useForm
        setValue("title", post.title);
        setValue("description", post.description);
        setValue("imageURL", post.imageURL);
      }
    }
    loadPost();
  }, []);

  //obtenemos los datos para crear el post
  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    if (params.id) {
      //console.log("actualizando...");
      updatePost(params.id, values);
    } else {
      createPost(values);
    }
    navigate("/");
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <div
        className="
    flex flex-col
    bg-white
    shadow-md
    px-4
    sm:px-6
    md:px-8
    lg:px-10
    py-8
    rounded-3xl
    w-3/5
    max-w-mxl
  "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          <h1>{params.id ? "Modificar viaje" : "Nuevo viaje"}</h1>
        </div>

        <div className="mt-10">
          <form action="#">
            <div className="flex flex-col mb-5">
              <label
                htmlFor="title"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Titulo:
              </label>
              {errors.title && (
                <span className="text-red-400 ">
                  El Titulo de usuario es requerido
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
                ></div>

                <input
                  {...register("title", { required: true })}
                  id="title"
                  type="text"
                  className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              text-black
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                  placeholder="Ingresa un titulo"
                  autoComplete="title"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="description"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Descripcion:
              </label>

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
                ></div>
                <textarea
                  {...register("description", { required: true })}
                  id="description"
                  type="description"
                  className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              text-black
              py-2
              focus:outline-none focus:border-blue-400
            "
                  placeholder="describe tu viaje"
                  autoComplete="description"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="imageURL"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Imagen:
              </label>

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
                ></div>
                <input
                  {...register("imageURL", { required: true })}
                  id="imageURL"
                  type="imageURL"
                  className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              text-black
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                  placeholder="Ingresa la url de la imagen"
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
                <span className="mr-2 uppercase">Guardar</span>
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
      </div>
    </div>
  );
};

export default PostForm;
