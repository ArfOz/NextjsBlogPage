// import 'server-only';
import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
    en: () =>
        import('./locales/en/common.json').then((module) => module.default),
    tr: () =>
        import('./locales/tr/common.json').then((module) => module.default),
    fr: () =>
        import('./locales/fr/common.json').then((module) => module.default),
};

export const getDictionary = (locale: Locale) => {
    return locale == 'en'
        ? dictionaries.en()
        : locale == 'tr'
        ? dictionaries.tr()
        : dictionaries.fr();
};
