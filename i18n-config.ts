interface languageObj {
    [key: string]: string
}

export const i18n = {
    defaultLocale: 'fr',
    locales: ['en', 'tr', 'fr'],
} as const

export const languageObj: languageObj = { en: 'US', tr: 'TR', fr: 'FR' }

export type Locale = (typeof i18n)['locales'][number]
