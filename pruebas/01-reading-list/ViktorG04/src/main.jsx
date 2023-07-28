import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store, persist } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
);
