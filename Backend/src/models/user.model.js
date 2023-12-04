import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "El título es requerido"],
    unique: true,
    minLength: 3,
    maxLength: 10,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: {
    type: String,
  },
});

export const userModel = model("User", userSchema);
//export default model("User", userSchema);
