import { Router } from "express";
import {
  registerController,
  loginController,
  logoutController,
  verifyToken,
} from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/register", registerController);
authRoutes.post("/login", loginController);
authRoutes.post("/logout", logoutController);
authRoutes.get("/verifyToken", verifyToken);

export default authRoutes;
