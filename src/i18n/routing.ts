import { defineRouting } from 'next-intl/routing'

interface languageObj {
    [key: string]: string
}

export const languageObj: languageObj = { en: 'US', tr: 'TR', fr: 'FR' }

export const routing = defineRouting({
    locales: ['en', 'tr', 'fr'],
    defaultLocale: 'en',
    pathnames: {
        '/': '/',
        '/pathnames': {},
    },
})
