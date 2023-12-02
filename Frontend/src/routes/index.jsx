import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewPost from "../pages/NewPost";
import UpdatePost from "../pages/UpdatePost";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../Layout/LayoutPublic";
import LayoutPrivate from "../Layout/LayoutPrivate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        element: <LayoutPrivate />,
        children: [
          {
            path: "/newpost",
            element: <NewPost />,
          },
          {
            path: "/updatepost/:id",
            element: <UpdatePost />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);