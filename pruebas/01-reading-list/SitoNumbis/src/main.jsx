import ReactDOM from "react-dom/client";

// app
import App from "./App.jsx";

// contexts
import { LanguageProvider } from "./contexts/LanguageProvider";
import { LibraryProvider } from "./contexts/LibraryProvider";
import { ModeProvider } from "./contexts/ModeProvider";

// styles
import "./index.css";
import 'tippy.js/dist/tippy.css';
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
      <ModeProvider>
        <App />
      </ModeProvider>
    </LibraryProvider>
  </LanguageProvider>
);
