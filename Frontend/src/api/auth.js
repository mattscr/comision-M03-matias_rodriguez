import axios from "axios";

const API = "http://localhost:8080/";

//***** Registrar usuario */
//realiza un post a la ruta api register con los valores dentro que tiene "user"
export const RegisterReq = (user) => axios.post(`${API}auth/register`, user);

//***** login usuario */
export const LoginReq = (user) => axios.post(`${API}auth/login`, user);
