'use client';
import './styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';
import { useTranslation } from '@/i18n';
import { use } from 'react';

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

async function getTrans(lng: string) {
    const { t } = await useTranslation(lng, 'common');
    return t;
}
export default function RootLayout({
    children,
    params: { lng },
}: {
    children: React.ReactNode;
    params: { lng: string };
}) {
    const t = use(getTrans(lng));
    return (
        <html lang={lng} dir={dir(lng)}>
            <head>
                <title>{t('title')}</title>
            </head>
            <body>
                <ThemeProvider enableSystem={true} attribute="class">
                    <Navbar lng={lng} />
                    {children}
                    <Footer lng={lng} />
                </ThemeProvider>
            </body>
        </html>
    );
}
