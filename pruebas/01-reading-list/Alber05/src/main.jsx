import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { ApiContext } from "./context/ApiContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiContext>
    <App />
  </ApiContext>
);
