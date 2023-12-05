import { postModel } from "../models/post.model.js";

export const createController = async (req, res) => {
  const { title, description, imageURL } = req.body;
  try {
    const newPost = new postModel({
      title,
      description,
      autor: req.user.id,
      imageURL,
    });
    console.log(newPost);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: "error al crear post", error });
  }
};

export const listController = async (req, res) => {
  try {
    const allPost = await postModel
      .find({}, "-__v")
      .populate("autor")
      .populate("comments");
    console.log(allPost);
    res.json(allPost);
  } catch (error) {
    res.status(500).json({ message: "error al mostrar post", error });
  }
};

export const byIdController = async (req, res) => {
  //guardamos el id en una constante
  const { id } = req.params;
  try {
    //nos devueve el post que coincide con la id y la guardamos en una constante
    const postId = await postModel
      .findById(id)
      .populate("autor")
      .populate("comments");
    if (!postId) return res.status(404).json(["post no encontrado"]);
    //mostramos el post obtenido
    res.json(postId);
  } catch (error) {
    res.status(500).json(["error al obtener post"]);
  }
};

export const updateController = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPost = await postModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "no se pudo actualizar post", error });
  }
};

export const deleteController = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await postModel.findByIdAndDelete(id);
    res.json(deletedPost);
  } catch (error) {
    res.status(500).json({ message: "no se pudo eliminar", error });
  }
};
