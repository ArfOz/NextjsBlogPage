'use client'
import './styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Navbar, Footer } from '@components/index'
import { Locale, i18n } from 'i18n-config'
import { getDictionary } from 'get-dictionary'
import { Splash } from 'next/font/google'

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

const splash = Splash({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-splash',
    weight: '400',
    style: ['normal'],
})

// const roboto_mono = Roboto_Mono({
//     subsets: ['latin'],
//     display: 'swap',
//     variable: '--font-roboto-mono',
// })

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(params.lang)

    return (
        <html lang={params.lang} className={`${splash.variable}`}>
            <head>
                <title>{dictionary['title']}</title>
            </head>
            <body>
                <ThemeProvider enableSystem={true} attribute="class">
                    <Navbar lang={params.lang} />
                    {children}
                    <Footer lang={params.lang} />
                </ThemeProvider>
            </body>
        </html>
    )
}
