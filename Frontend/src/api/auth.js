import axios from "./Credentials.js";

//***** Registrar usuario */
export const RegisterReq = (user) => axios.post(`auth/register`, user);

//***** login usuario */
export const LoginReq = (user) => axios.post(`auth/login`, user);

//***** verificación de token */
export const verifyToken = () => axios.get(`auth/verifyToken`);
