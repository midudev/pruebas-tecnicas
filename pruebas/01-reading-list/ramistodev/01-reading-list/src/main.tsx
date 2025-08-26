import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BooksProvider } from "./context/BooksProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BooksProvider>
      <App />
    </BooksProvider>
  </StrictMode>
);
