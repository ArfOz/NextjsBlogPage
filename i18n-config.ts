interface languageObj {
    [key: string]: string;
}

export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
} as const;

export const languageObj: languageObj = { en: 'US', tr: 'TR' };

export type Locale = (typeof i18n)['locales'][number];
