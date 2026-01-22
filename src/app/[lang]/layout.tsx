'use client'
import './styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Navbar, Footer } from '@components/index'
import { Locale, i18n } from 'i18n-config'
import { getDictionary } from 'get-dictionary'
import { Splash, Orbitron, Exo_2 } from 'next/font/google'

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

const orbitron = Orbitron({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-orbitron',
    weight: ['400', '700', '900'],
})

const exo2 = Exo_2({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-exo2',
    weight: ['300', '400', '500', '700'],
})

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(params.lang)

    return (
        <html
            lang={params.lang}
            className={`${splash.variable} ${orbitron.variable} ${exo2.variable}`}
        >
            <head>
                <title>{dictionary['title']}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="Futuristic developer portfolio with cutting-edge design"
                />
            </head>
            <body>
                <ThemeProvider attribute="class">
                    {/* Main content */}
                    <div className="relative z-10">
                        <Navbar lang={params.lang} />
                        <main className="min-h-screen">{children}</main>
                        <Footer lang={params.lang} />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
