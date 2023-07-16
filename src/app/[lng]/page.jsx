'use client';
import { Inter } from 'next/font/google';
import MyProfilePic from './components/profilePic';
import { fallbackLng, languages } from '../../i18n/settings';
import { useTranslation } from '../../i18n';
import { use } from 'react';
import parse from 'html-react-parser';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

async function getTrans(lng) {
    const { t } = await useTranslation(lng, 'common');
    return t;
}
export default function Page({ params: { lng } }) {
    const t = use(getTrans(lng));

    if (languages.indexOf(lng) < 0) lng = fallbackLng;

    return (
        <div className="flex flex-col p-4 mb-24">
            <Head>
                <title>{t('title')}</title>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
            </Head>
            <h1 className="text-center">{t('title')}</h1>

            <p className="text-justify">{parse(t('home.context'))}</p>
            <h2 className="self-center">{t('home.course_title')}</h2>
            <ul>{parse(t('home.course_times'))}</ul>
            <h2 className="self-center">{t('home.working_history_title')}</h2>
            <ul>{parse(t('home.working_history'))}</ul>
            <MyProfilePic />
        </div>
    );
}

// export async function getStaticProps({ locale }: any) {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ["common"])),
//             // Will be passed to the page component as props
//         },
//     };
// }
