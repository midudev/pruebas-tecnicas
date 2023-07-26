import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App.jsx";
import StorageListener from "./data/StorgeListener/storageListener";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <StorageListener />
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
