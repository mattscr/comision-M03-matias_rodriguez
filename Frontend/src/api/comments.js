import axios from "./Credentials";

//obtener comentarios de un post
export const getCommentReq = (postid, commentid) =>
  axios.get(`comment/${postid}/${commentid}`);
//crear comentario en un post
export const createCommentReq = (postid) => axios.post(`comment/${postid}`);
//eliminar comentario de un post
export const deleteCommentReq = (postid, commentid) =>
  axios.delete(`comment/${postid}/${commentid}`);
//actualizar comentario
export const updateCommentReq = (postid, commentid) =>
  axios.put(`comment/${postid}/${commentid}`);
