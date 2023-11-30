/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
//importamos la conexion a la api
import { RegisterReq, LoginReq } from "../api/auth.js";

export const Authcontext = createContext();

export const useAuth = () => {
  const context = useContext(Authcontext);
  if (!context) throw new Error("error en el contexto del usuario");
  return context;
};

export const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  //verificamos si esta autenticado
  const [isAuth, setIsAuth] = useState(false);
  //manejo de errores
  const [errors, setErrors] = useState([]);

  //registro del usuario
  const signup = async (user) => {
    try {
      const res = await RegisterReq(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuth(true);
    } catch (error) {
      //console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  //inicio de sesion
  const signin = async (user) => {
    try {
      const res = await LoginReq(user);
      setUser(res.data);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
      console.log(error.response);
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  //reseteamos los errores
  useEffect(() => {
    //si existen errores
    if (errors.length > 0) {
      const timerErr = setTimeout(() => {
        //guardamos los mismos
        setErrors([]);
      }, 3000);
      //limpiamos el timeout
      return () => clearTimeout(timerErr);
    }
    //mostramos dichos errores
  }, [errors]);

  return (
    <Authcontext.Provider value={{ signup, signin, isAuth, user, errors }}>
      {children}
    </Authcontext.Provider>
  );
};
