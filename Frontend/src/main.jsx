import ReactDOM from "react-dom/client";
import "./index.css";
import { Authprovider } from "./context/Authcontext.jsx";
import { PostProvider } from "./context/PostContext.jsx";
import { router } from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import { CommentProvider } from "./context/CommentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authprovider>
    <PostProvider>
      <CommentProvider>
        <RouterProvider router={router} />
      </CommentProvider>
    </PostProvider>
  </Authprovider>
);
