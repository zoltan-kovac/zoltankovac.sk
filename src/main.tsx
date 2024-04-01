import "@fontsource/barlow";

import * as React from "react";
import { Root, createRoot } from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, sk } from "./locales";
import App from "next/app";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      sk,
    },
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // resources: {
    //   en: {
    //     translation: {
    //       "Welcome to React": "Welcome to React and react-i18next",
    //     },
    //   },
    //   sk: {
    //     translation: {
    //       "Welcome to React": "Vitaj v reakte react-i18next",
    //     },
    //   },
    // },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const container = document.getElementById("root");
const root: Root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
