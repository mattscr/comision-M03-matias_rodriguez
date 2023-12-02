import { postModel } from "../models/post.model.js";

export const createController = async (req, res) => {
  try {
    const newPost = await postModel.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "error al crear post", error });
  }
};

export const listController = async (req, res) => {
  try {
    const allPost = await postModel.find().populate("autor");
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
    const postId = await postModel.findById(id);
    if (!postId) return res.status(404).json({ message: "post no encontrado" });
    //mostramos el post obtenido
    res.json(postId);
  } catch (error) {
    //si falla muestra el error
    res.status(500).json({ message: "error al obtener post", error });
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
