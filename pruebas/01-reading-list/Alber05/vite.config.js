import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), "react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
});
