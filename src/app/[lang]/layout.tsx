'use client';
import './styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/navbar';
import Footer from './components/footer';
// import { dir } from 'i18next';

import { i18n, Locale } from '../../../i18n-config';
import { getDictionary } from '../../../get-dictionary';
import LangNotFound from './components/lang-notfound';

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
    // if (!i18n.locales.includes(params.lang)) {
    //     return <LangNotFound />;
    // }

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
