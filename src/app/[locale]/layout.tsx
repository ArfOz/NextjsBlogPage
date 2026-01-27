import './styles/globals.css'
import { notFound } from 'next/navigation'
import { Locale, hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { routing } from '../../i18n/routing'

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(
    props: Omit<LayoutProps<'/[locale]'>, 'children'>,
) {
    const { locale } = await props.params

    const t = await getTranslations({
        locale: locale as Locale,
    })

    return t
}

export default async function LocaleLayout({
    children,
    params,
}: LayoutProps<'/[locale]'>) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params
    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    // Enable static rendering
    setRequestLocale(locale)

    return (
        <html className="h-full" lang={locale}>
            <body>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    )
}
