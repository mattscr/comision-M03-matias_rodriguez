import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Se requiere un titulo para el post"],
    minlength: [5, "debe tener al menos 1 caracteres"],
    maxlength: [30, "solo se permiten 30 caracteres como maximo"],
  },
  description: {
    type: String,
    unique: false,
    required: [true, "Se requiere una descripción"],
    minlength: [5, "ingrese una descripcion valida, al menos 10 caracteres"],
    maxlength: [1000, "Limite maximo: 1000 caracteres"],
  },
  autor: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "El autor es requerido"],
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "commentModel",
    },
  ],
  imageURL: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

//export default model("post", postSchema);
export const postModel = model("post", postSchema);
