import { getDictionary } from 'get-dictionary';
import { Locale } from 'i18n-config';

export async function Footer({ lang }: { lang: Locale }): Promise<JSX.Element> {
    const dictionary = await getDictionary(lang);
    return (
        <footer
            className="bg-slate-400
             text-3x text-center
             fixed
             inset-x-0
             bottom-0
             p-4
             flex
             flex-row
             justify-between
             "
        >
            <p className="flex flex-wrap sm:text-center items-center mt-3 text-sm font-medium dark:text-gray-800 sm:mt-0">
                &copy; 2023 Arif Özkan ÖZTÜRK. All rights reserved.
            </p>
            <ul className="flex flex-wrap sm:text-center items-center mt-3 text-sm font-medium dark:text-gray-800 sm:mt-0">
                <li>
                    <a href={`/${lang}/contact`} className="hover:underline">
                        {dictionary['contact'].link}
                    </a>
                </li>
            </ul>
        </footer>
    );
}
