import { commentModel } from "../models/comment.model.js";
import { postModel } from "../models/post.model.js";
import { userModel } from "../models/user.model.js";

export const createComment = async (req, res) => {
  const { autor, description } = req.body;
  const { postid } = req.params;
  //console.log("la id del post es :", postid);
  try {
    // verificar existencia del post
    const isPost = await postModel.findById(postid);
    //console.log("el post es: ", isPost);

    // Crear el comentario
    const newComment = new commentModel({
      autor,
      description,
    });

    // Guardar el comentario en la base de datos
    const savedComment = await newComment.save();

    //busca el post por id y con el metodo push agrega el comentario al post
    await postModel.findOneAndUpdate(
      { _id: postid },
      { $push: { comments: savedComment._id } }
    );

    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({
      message: "No se pudo crear el comentario",
      details: error.message,
    });
    //console.error("Error comentario:", error.message);
  }
};
