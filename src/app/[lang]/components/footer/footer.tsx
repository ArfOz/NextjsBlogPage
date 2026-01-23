import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'

export async function Footer({ lang }: { lang: Locale }): Promise<JSX.Element> {
    const dictionary = await getDictionary(lang)

    return (
        <footer className="w-full max-w-none h-16 px-4 flex flex-row justify-between items-center border-t border-[#e5e7eb] dark:border-[#334155] bg-[#f8fafc] dark:bg-[#1e2233] fixed inset-x-0 bottom-0 z-50 shadow">
            <p className="flex items-center text-sm font-medium text-[#1e293b] dark:text-[#f1f5f9]">
                &copy; 2025 Arif Özkan ÖZTÜRK. All rights reserved.
            </p>
            <ul className="flex items-center text-sm font-medium">
                <li>
                    <a
                        href={`/${lang}/contact`}
                        className="text-[#1e293b] dark:text-[#f1f5f9] hover:text-[#0f172a] dark:hover:text-white hover:underline transition-colors duration-300"
                    >
                        {dictionary['contact'].link}
                    </a>
                </li>
            </ul>
        </footer>
    )
}
