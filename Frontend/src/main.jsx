import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import { Authprovider } from "./context/Authcontext.jsx";
import { PostProvider } from "./context/PostContext.jsx";
import { router } from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<App />

  <Authprovider>
    <PostProvider>
      <RouterProvider router={router} />
    </PostProvider>
  </Authprovider>
);
