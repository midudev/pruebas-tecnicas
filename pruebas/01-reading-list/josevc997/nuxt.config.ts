const path = require("path");
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        "nuxt-icon",
        "nuxt-headlessui",
        "@nuxt/content",
        "@nuxt/image-edge",
        "@nuxtjs/i18n",
        "@sidebase/nuxt-auth",
        "@pinia/nuxt",
        "@nuxt/devtools",
    ],
    // Optionally change the default prefix.
    headlessui: {
        prefix: "",
    },
    content: {
        sources: {
            // overwrite default source AKA `content` directory
            content: {
                driver: "fs",
                prefix: "/docs", // All contents inside this source will be prefixed with `/docs`
                base: path.resolve(__dirname, "content"),
                dir: "content",
            },
        },
    },
    image: {
        dir: "assets/img",
    },
    i18n: {
        /* module options */
    },
    auth: {
        baseURL: "http://127.0.0.1:8000/api/users/",
        provider: {
            type: "local",
            endpoints: {
                signIn: { path: "/login/", method: "post" },
                signOut: { path: "/logout/", method: "post" },
                getSession: { path: "/session/", method: "get" },
            },
            pages: {
                login: "/login",
            },
            token: {
                maxAgeInSeconds: 60 * 60 * 24 * 7,
                headerName: "Authorization",
            },
        },
        globalAppMiddleware: true,
        isEnabled: true,
    },
    imports: {
        dirs: ["./stores"],
    },
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            "defineStore", // import { defineStore } from 'pinia'
            ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
});
