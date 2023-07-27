import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translation from '../translation.json'

await i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        detection: { order: ["localStorage", "navigator"] },
        resources: translation,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;