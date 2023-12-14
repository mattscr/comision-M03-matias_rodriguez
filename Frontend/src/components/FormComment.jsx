/* eslint-disable react/prop-types */
//import { useState } from "react";
import { useComment } from "../context/CommentContext";
import { useForm } from "react-hook-form";
const FormComment = ({ postid }) => {
  const { register, handleSubmit } = useForm();
  //console.log(postid);
  const { createComment } = useComment();

  const onSubmit = handleSubmit(async (values) => {
    //console.log(values, postid);
    //createComment(postid, values);
    try {
      await createComment(postid, values);
    } catch (error) {
      console.error("Error al enviar el comentario:", error);
    }
  });

  return (
    <>
      {/* comment form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Agrega un nuevo comentario
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <input
              className="text-black bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              placeholder="Escribe tu comentario"
              {...register("description", { required: true, maxLength: 50 })}
            />
          </div>
          <div className="w-full flex items-end md:w-full px-3">
            <input
              type="submit"
              className="text-black bg-white  font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
            />
          </div>
        </div>
      </form>
      {/* fin form */}
    </>
  );
};
export default FormComment;
