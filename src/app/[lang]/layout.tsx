'use client';
import './styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar, Footer } from '@components/index';
// import { dir } from 'i18next';

import { Locale, i18n } from 'i18n-config';
import { getDictionary } from 'get-dictionary';

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const dictionary = await getDictionary(params.lang);

    return (
        <html lang={params.lang}>
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
    );
}
