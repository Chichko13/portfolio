import React from "react";
import { createRoot } from "react-dom/client";
import "./sass/main.scss";
import Home from "./pages/home";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
