import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { App } from "./App";
import ReactModal from "react-modal";
import "react-toastify/dist/ReactToastify.css";

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
