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

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(params.lang)

    return (
        <html lang={params.lang}>
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
                    <div className="relative z-10 w-full overflow-x-hidden">
                        <Navbar lang={params.lang} />
                        <main className="min-h-screen w-full">{children}</main>
                        <Footer lang={params.lang} />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
