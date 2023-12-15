import ReactDOM from "react-dom/client";
import "./index.css";
import { Authprovider } from "./context/Authcontext.jsx";
import { PostProvider } from "./context/PostContext.jsx";
import { router } from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import { CommentProvider } from "./context/CommentContext.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <PostProvider>
        <CommentProvider>
          <RouterProvider router={router} />
        </CommentProvider>
      </PostProvider>
    </Authprovider>
  </React.StrictMode>
);
