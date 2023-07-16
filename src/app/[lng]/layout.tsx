'use client';
import './styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}
export default function RootLayout({
    children,
    params: { lng },
}: {
    children: React.ReactNode;
    params: { lng: string };
}) {
    return (
        <html lang={lng} dir={dir(lng)}>
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
