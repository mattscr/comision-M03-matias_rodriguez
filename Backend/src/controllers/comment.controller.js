import { commentModel } from "../models/comment.model.js";
import { postModel } from "../models/post.model.js";

export const createController = async (req, res) => {
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

export const listController = async (req, res) => {
  const { postid } = req.params;
  //console.log(req.params);
  try {
    const comment = await postModel.findById(postid).populate("comments");
    //console.log(comment.comments);
    res.json(comment.comments);
  } catch (error) {
    console.error("Error al listar comentarios:", error.message);
  }
};

export const deleteController = async (req, res) => {
  const { postid, idcomment } = req.params;
  //console.log(postid, idcomment);
  try {
    const comment = await commentModel.findByIdAndDelete(idcomment);
    //console.log(comment);
    !comment
      ? res.status(404).json({ error: "Comentario no encontrado" })
      : await postModel.findOneAndUpdate(
          { _id: postid },
          { $pull: { comments: idcomment } }
        );

    res.status(200).json(comment);
  } catch (error) {
    //console.log(error.message);
    console.error("Error al eliminar comentarios:", error.message);
  }
};
