export const SITE_TITLE = "Pruebas Técnicas de Programación";
export const SITE_DESCRIPTION =
  "Practica tus habilidades en programación con pruebas técnicas de empresas reales";
export const TWITTER_HANDLE = "@midudev";
export const MY_NAME = "Miguel Ángel Durán";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
