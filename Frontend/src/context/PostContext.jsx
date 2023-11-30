import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState([]);

  //crear post
  const createPost = async (post) => {
    console.log(post);
  };

  return (
    <PostContext.Provider value={{ createPost, post }}>
      {children}
    </PostContext.Provider>
  );
};
