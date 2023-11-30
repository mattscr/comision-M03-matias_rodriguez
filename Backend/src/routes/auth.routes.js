import { Router } from "express";
import {
  registerController,
  loginController,
  logoutController,
  verifyToken,
  profile,
} from "../controllers/auth.controller.js";
import {
  handleErrorValidations,
  loginValidate,
  registerValidate,
} from "../middlewares/authValidations.js";
import { authRequired } from "../middlewares/validateToken.js";

const authRoutes = Router();

authRoutes.post(
  "/register",
  registerValidate,
  handleErrorValidations,
  registerController
);
authRoutes.post(
  "/login",
  loginValidate,
  handleErrorValidations,
  loginController
);
authRoutes.post("/logout", logoutController);
authRoutes.get("/verifyToken", verifyToken);
authRoutes.get("/profile", authRequired, profile);

export default authRoutes;
