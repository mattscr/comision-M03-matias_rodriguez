import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createComment } from "../controllers/comment.controller.js";

const commentRouter = Router();

commentRouter.post("/:postid", authRequired, createComment);

commentRouter.delete("/:id", authRequired);

commentRouter.put("/:id", authRequired);

export default commentRouter;
