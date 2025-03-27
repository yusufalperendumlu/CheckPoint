import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // App.tsx'yi burada çağırıyoruz
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
