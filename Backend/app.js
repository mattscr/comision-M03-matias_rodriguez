import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.routes.js";
import postRouter from "./src/routes/post.routes.js";
import commentRouter from "./src/routes/comment.routes.js";
import cors from "cors";
import helmet from "helmet";
//app
const app = express();

//MIDDLEWARE
app.use(morgan("dev"));
//permitimos el acceso al nuestro cliente
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//ROUTES
app.get("/", (req, res) => {
  res.send("<h2>Pagina principal!</h2>");
});
app.use("/auth", authRoutes);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

//si no encuentra ninguna ruta: 404 not found
app.use((req, res) => {
  res.send("<h2>404</h2>");
});
export default app;
