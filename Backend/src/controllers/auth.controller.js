import { userModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createAccesToken } from "../middlewares/jsonwebtoken.js";
import { settingDotEnv } from "../settings/config.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  //capturamos los datos del body
  const { username, email, password, avatarURL } = req.body;

  try {
    //verificamos si el mail del usuario ya existe
    const UserFound = await userModel.findOne({ email });
    if (UserFound) return res.status(400).json(["El Email ya está en uso"]);

    //encriptar contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    //creamos un usuario nuevo con los datos capturados
    const NewUser = new userModel({
      username,
      email,
      password: passwordHash,
      avatarURL,
    });
    //guardamos el nuevo usuario
    const UserSaved = await NewUser.save();
    //creamos access token
    const token = await createAccesToken({ id: UserSaved._id });
    res.cookie("token", token);
    res.json({
      message: "Usuario registrado con éxito",
      id: UserSaved.id,
      username: UserSaved.username,
      email: UserSaved.email,
    });
  } catch (error) {
    //en caso de falla, respondemos con un status code y un mensaje
    res.status(500).json({ message: "error al registrar el usuario", error });
  }
};

export const loginController = async (req, res) => {
  //capturamos los datos del body
  const { username, email, password, avatarURL } = req.body;
  try {
    //verificamos si se encuentra el usuario por email
    const UserFound = await userModel.findOne({ email });
    if (!UserFound) return res.status(400).json(["Error en las credenciales"]);
    //if (!UserFound) return res.status(400).json([error.errors[0].msg]);

    //verificamos si la contraseña es correcta
    const match = await bcrypt.compare(password, UserFound.password);
    if (!match) return res.status(400).json(["Error en las credenciales"]);

    //generamos el token de acceso
    const token = await createAccesToken({ id: UserFound._id });
    res.cookie("token", token);
    res.json({
      message: "Bienvenido!",
      username: UserFound.username,
      email: UserFound.email,
    });
  } catch (error) {
    res.status(500).json(["Error en login"]);
  }
};

export const logoutController = async (req, res) => {
  //se limpian las cookies
  res.cookie("token", "", { expires: new Date(0) });
  return res.status(200).json(["Ha cerrado exitosamente la sesión"]);
};

const { secret_key } = settingDotEnv();

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  console.log("token: ", token);

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, secret_key, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await userModel.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};

export const profile = async (req, res) => {
  try {
    const userFound = await userModel.findById(req.user.id);
    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });
    return res.json({
      message: "perfil del usuario: ",
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      avatarURL: userFound.avatarURL,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al mostrar perfil", error });
  }
};
