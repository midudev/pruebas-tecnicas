/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        swc: {
            jsc: {
                target: "es2020",
                parser: { syntax: "ecmascript", jsx: true },
                transform: { react: { runtime: "automatic" } },
                module: { type: "commonjs" },
            },
        },
    },
});
