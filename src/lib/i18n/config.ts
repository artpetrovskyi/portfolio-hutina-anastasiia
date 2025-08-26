export const locales = ["en", "uk"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const languageNames: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
};

import en from "./locales/en.json";
import uk from "./locales/uk.json";

const i18nConfig = {
  // lng: 'en', // if you're using a language detector, do not define the lng option
  // debug: true,
  supportedLngs: locales,
  fallbackLng: defaultLocale,
  resources: {
    en: { translation: en },
    uk: { translation: uk },
  },
};

export default i18nConfig;
