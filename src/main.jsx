import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "bootstrap-icons/font/bootstrap-icons.css"

import { BrowserRouter } from "react-router";
import { EcommerceApp } from "./EcommerceApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <EcommerceApp />
    </BrowserRouter>
  </StrictMode>
);
