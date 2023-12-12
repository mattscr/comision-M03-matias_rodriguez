/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {
  getPost,
  getPostByIdReq,
  createPostReq,
  updatePostReq,
  deletePostReq,
} from "../api/post.js";

const PostContext = createContext();

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error("Error en el contexto de Post");
  return context;
};

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState([]);

  //crear post
  const createPost = async (post) => {
    console.log(post);
    const res = await createPostReq(post);
    console.log(res);
  };

  //listar todos los post
  const getAllPost = async () => {
    const res = await getPost();
    //console.log(res);
    try {
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //busqueda por id
  const getPostById = async (id) => {
    try {
      const res = await getPostByIdReq(id);
      //console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //actualizar post
  const updatePost = async (id, post) => {
    try {
      const res = await updatePostReq(id, post);
      //console.log(res);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Eliminar
  const deletePost = async (id) => {
    try {
      const res = await deletePostReq(id);
      // console.log(res);
      if (res.status === 200) setPost(post.filter((post) => post._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        createPost,
        getAllPost,
        updatePost,
        getPostById,
        deletePost,
        post,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
