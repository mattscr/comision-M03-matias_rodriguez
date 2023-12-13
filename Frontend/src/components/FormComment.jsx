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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("description", { required: true, maxLength: 50 })}
        />
        <input type="submit" />
      </form>
      {/* fin form */}
    </>
  );
};
export default FormComment;
