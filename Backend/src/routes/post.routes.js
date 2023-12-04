import { Router } from "express";
import {
  byIdController,
  createController,
  deleteController,
  listController,
  updateController,
} from "../controllers/post.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const postRouter = Router();

//get all travels
postRouter.get("/", listController);
//get by id
postRouter.get("/:id", byIdController);
//create
postRouter.post("/", authRequired, createController);
//update
postRouter.put("/:id", authRequired, updateController);
//delete
postRouter.delete("/:id", authRequired, deleteController);

export default postRouter;
