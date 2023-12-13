/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {
  createCommentReq,
  deleteCommentReq,
  getCommentReq,
  updateCommentReq,
} from "../api/comments";

const CommentContext = createContext();

export const useComment = () => {
  const context = useContext(CommentContext);
  if (!context) throw new Error("error en el contexto de comentario");
  return context;
};

export const CommentProvider = ({ children }) => {
  const [comment, setComment] = useState([]);

  //crear comment
  const createComment = async (postid, comment) => {
    console.log(postid, comment);
    const res = await createCommentReq(postid, comment);
    console.log(res);
  };

  //listar todos los cometarios del post
  const getAllComment = async (postid) => {
    try {
      const res = await getCommentReq(postid);
      //console.log(res.data);
      setComment(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //actualizar comment
  const updateComment = async (postid, commentid) => {
    try {
      const res = await updateCommentReq(postid, commentid);
      console.log(res);
      setComment(res);
    } catch (error) {
      console.log(error);
    }
  };

  //delete comment
  const deleteComment = async (postid, commentid) => {
    try {
      const res = await deleteCommentReq(postid, commentid);
      console.log(res);
      if (res.status === 200) setComment();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentContext.Provider
      value={{
        comment,
        createComment,
        getAllComment,
        updateComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
