import mongoose, { connect } from "mongoose";
import { settingDotEnv } from "./config.js";

const { db } = settingDotEnv();

export const connectionMongodb = async () => {
  try {
    //guardamos la conexion en una constante para lugo poder mostrar la propiedad NAME en consola
    const database = await mongoose.connect(db.host);
    console.log("conexion establecida con: ", database.connection.name);
  } catch (err) {
    console.log("no se pudo conectar a la base de datos", err);
  }
};
