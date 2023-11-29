import { Router } from "express";

const userRouter = Router();

//get all user
userRouter.get("/", (req, res) => {
  res.send("<h2>todos los usuarios!</h2>");
});
//get by id
userRouter.get("/:id");
//create
userRouter.post("/");
//update
userRouter.put("/:id");
//delete
userRouter.delete("/id");

export default userRouter;
