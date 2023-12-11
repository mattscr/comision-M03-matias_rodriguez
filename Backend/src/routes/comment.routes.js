import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  listController,
  createController,
  deleteController,
  updateController,
} from "../controllers/comment.controller.js";

const commentRouter = Router();

//commentRouter.get("/", authRequired, listController);
commentRouter.get("/:postid", authRequired, listController);

commentRouter.post("/:postid", authRequired, createController);

commentRouter.delete("/:postid/:idcomment", authRequired, deleteController);

commentRouter.put("/:postid/:idcomment", authRequired, updateController);

export default commentRouter;
