import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Provider store={store}>
      <App />
    </Provider>
    <Footer />
  </React.StrictMode>
);
