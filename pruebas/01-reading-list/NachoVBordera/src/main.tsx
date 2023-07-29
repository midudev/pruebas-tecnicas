import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BookProvider } from "./context/BookContext.tsx";
import { BookSavedProvider } from "./context/SavedContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookProvider>
      <BookSavedProvider>
        <App />
      </BookSavedProvider>
    </BookProvider>
  </React.StrictMode>
);
