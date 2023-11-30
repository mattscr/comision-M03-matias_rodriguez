import axios from "axios";

//generamos una instancia para las credenciales, desde nuestro servidor
const instance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

export default instance;
