import axios from "./Credentials";

//obtener todos los post
export const getPost = () => axios.get("post");
//obtener post por id
export const getPostById = (id) => axios.get(`post/${id}`);
//crear post
export const createPostReq = (post) => axios.post("post", post);
//actualizar post
export const updatePost = (id, post) => axios.put(`post/${id}`, post);
//borrar post
export const deletePost = (id) => axios.delete(`post/${id}`);
