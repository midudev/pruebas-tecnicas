import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { LibraryProvider } from "./contexts/library.context.tsx";
import { NavigationProvider } from "./contexts/navigation.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LibraryProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </LibraryProvider>
  </React.StrictMode>
);
