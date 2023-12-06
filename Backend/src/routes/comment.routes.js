import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  listController,
  createController,
  deleteController,
} from "../controllers/comment.controller.js";

const commentRouter = Router();

//commentRouter.get("/", authRequired, listController);
commentRouter.get("/:postid", authRequired, listController);

commentRouter.post("/:postid", authRequired, createController);

commentRouter.delete("/:postid/:idcomment", authRequired, deleteController);

export default commentRouter;
