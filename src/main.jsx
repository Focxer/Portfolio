import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Projects } from "./pages";
import "./components/Observer.css";
import { Home } from "./pages/home";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "projetos",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
