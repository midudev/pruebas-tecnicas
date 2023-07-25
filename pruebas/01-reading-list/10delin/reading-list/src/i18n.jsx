import i18next from "i18next";

import translation_en from "./locales/en-GB/translation.json";
import translation_es from "./locales/es-ES/translation.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      translation: translation_es,
    },
    en: {
      translation: translation_en,
    },
  },
});

export default i18next;
