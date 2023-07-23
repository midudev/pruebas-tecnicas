import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import BookProvider from "./context/bookContext.tsx";
import { StrictMode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BookProvider>
        <App />
      </BookProvider>
    </ThemeProvider>
  </StrictMode>
);
