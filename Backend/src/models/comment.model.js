import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  autor: {
    type: Schema.Types.ObjectId,
    ref: "userModel",
    required: [true, "El autor es requerido"],
  },

  description: {
    type: String,
  },
});

export const commentModel = model("Comment", commentSchema);
