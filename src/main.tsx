import React from "react";
import ReactDOM from "react-dom/client";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import ChaosPage from "./pages/ChaosPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./pages/Error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users/",
        element: <UsersPage />,
      },
      {
        path: "posts/",
        element: <PostsPage />,
      },
      {
        path: "chaos/",
        element: <ChaosPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
