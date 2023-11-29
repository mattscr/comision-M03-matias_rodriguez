import { Router } from "express";
import {
  byIdController,
  createController,
  deleteController,
  listController,
  updateController,
} from "../controllers/post.controller.js";

const postRouter = Router();

//get all travels
postRouter.get("/", listController);
//get by id
postRouter.get("/:id", byIdController);
//create
postRouter.post("/", createController);
//update
postRouter.put("/:id", updateController);
//delete
postRouter.delete("/:id", deleteController);

export default postRouter;
