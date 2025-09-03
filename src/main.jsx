import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./assets/css/style.css";
import App from "./App.jsx";
import "./locales/i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
