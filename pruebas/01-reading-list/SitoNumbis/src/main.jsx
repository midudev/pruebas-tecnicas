import ReactDOM from "react-dom/client";

// app
import App from "./App.jsx";

// providers
import { LanguageProvider } from "./contexts/LanguageProvider";
import { LibraryProvider } from "./contexts/LibraryProvider";
import { FiltersProvider } from "./contexts/FiltersProvider";

// styles
import "./index.css";
import "tippy.js/dist/tippy.css";
// animations
import "./assets/animations/agrow.css";
import "./assets/animations/shake.css";
import "./assets/animations/appear.css";
import "./assets/animations/entrance.css";

// tippy
import "tippy.js/dist/tippy.css"; // optional

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <LibraryProvider>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </LibraryProvider>
  </LanguageProvider>
);
