import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import frenchTranslation from "./translations/french.json";
import englishTranslation from "./translations/english.json";
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: englishTranslation,
  fr: frenchTranslation
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    lng: "fr",
    fallbackLng: "en",
    resources,
    ns: ["moduleA", "moduleB"],
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });
export default i18n;
