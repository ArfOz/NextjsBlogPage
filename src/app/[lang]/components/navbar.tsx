import Link from 'next/link';
import { FaLinkedin, FaGithub, FaMedium, FaEye } from 'react-icons/fa';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '../../../../get-dictionary';
import ThemeChanger from './themChanger';
import LanguageSwitcher from './languageChanger/languageChanger';
import ViewCounter from './viewCounter/viewCounter';

export default async function Navbar({
    lang,
}: {
    lang: Locale;
}): Promise<JSX.Element> {
    const dictionary = await getDictionary(lang);
    return (
        <nav className="bg-slate-400 sticky top-0 drop-shadow-xl z-10 ">
            <div className="prose prose-xl mx-auto flex flex-col sm:flex-row items-center">
                <div className="prose prose-xl mx-auto justify-center grow basis-1">
                    <Link href={`/${lang}`}>Arif Özkan</Link>
                </div>
                <div className="prose prose-xl mx-auto justify-center grow basis-1">
                    <Link href={`/${lang}/todos`}>
                        {dictionary['navbar'].todos}
                    </Link>
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

                    <LanguageSwitcher lang={lang} />
                    <div className="prose prose-xl mx-auto flex flex-row justify-center items-center space-x-2 p-4">
                        <FaEye />
                        <ViewCounter lang={lang} />
                    </div>
                </div>
            </div>
        </nav>
    );
}
