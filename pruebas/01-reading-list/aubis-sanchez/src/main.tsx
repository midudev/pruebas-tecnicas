import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import BookProvider from "./context/bookContext.tsx";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </StrictMode>
);
