import Link from 'next/link';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import ThemeChanger from './themChanger';
import LanguageChanger from './languageChanger/languageChanger.js';
import { fallbackLng, languages } from '@/i18n/settings';
import { useTranslation } from '@/i18n';
import { LanguageBase } from './languageChanger';
import { use } from 'react';

async function getTrans(lng) {
    const { t } = await useTranslation(lng, 'common');
    return t;
}

export default function Navbar({ lng }) {
    if (languages.indexOf(lng) < 0) lng = fallbackLng;
    const t = use(getTrans(lng));

    return (
        <nav className="bg-slate-400 sticky top-0 drop-shadow-xl z-10 ">
            <div className="prose prose-xl mx-auto flex flex-col sm:flex-row items-center">
                <div className="prose prose-xl mx-auto justify-center grow basis-1">
                    <Link href="/">Arif Özkan</Link>
                </div>
                <div className="prose prose-xl mx-auto justify-center grow basis-1">
                    <Link href="/todos">{t('navbar.todos')}</Link>
                </div>
                <div className="prose prose-xl mx-auto flex flex-row justify-center items-center space-x-3 p-4 grow-0 basis-9">
                    <Link href="https://github.com/ArfOz/">
                        <FaGithub />
                    </Link>
                    <Link href="https://medium.com/@arfoz1245">
                        <FaMedium />
                    </Link>
                    <Link href="https://www.linkedin.com/in/arifozkanozturk/">
                        <FaLinkedin />
                    </Link>
                    <ThemeChanger />

                    <LanguageBase lng={lng} />
                </div>
            </div>
        </nav>
    );
}
