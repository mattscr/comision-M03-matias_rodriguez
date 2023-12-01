import axios from "./Credentials";

//obtener todos los post
export const getPost = () => axios.get("post");
//obtener post por id
export const getPostByIdReq = (id) => axios.get(`post/${id}`);
//crear post
export const createPostReq = (post) => axios.post("post", post);
//actualizar post
export const updatePostReq = (id, post) => axios.put(`post/${id}`, post);
//borrar post
export const deletePostReq = (id) => axios.delete(`post/${id}`);
