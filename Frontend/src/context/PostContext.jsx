/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {
  getPost,
  getPostById,
  createPostReq,
  updatePost,
  deletePost,
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

  const getAllPost = async () => {
    const res = await getPost();
    console.log(res);
    try {
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider value={{ createPost, getAllPost, post }}>
      {children}
    </PostContext.Provider>
  );
};
