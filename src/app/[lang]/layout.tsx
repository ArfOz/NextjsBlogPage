import './styles/globals.css'
import { Providers } from './providers'
import { Navbar, Footer } from '@components/index'
import { Locale, i18n } from 'i18n-config'
import { getDictionary } from 'get-dictionary'

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dictionary = await getDictionary(lang)

    return (
        <html lang={lang} suppressHydrationWarning>
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
                <Providers>
                    {/* Main content */}
                    <div className="relative z-10 w-full overflow-x-hidden">
                        <Navbar lang={lang} />
                        <main className="min-h-screen w-full">{children}</main>
                        <Footer lang={lang} />
                    </div>
                </Providers>
            </body>
        </html>
    )
}
