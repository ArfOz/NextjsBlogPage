import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'

export async function Footer({ lang }: { lang: Locale }): Promise<JSX.Element> {
    const dictionary = await getDictionary(lang)

    return (
        <footer
            className="futuristic-card
             fixed
             inset-x-0
             bottom-0
             h-16
             px-4
             flex
             flex-row
             justify-between
             items-center
             z-50
             border-t
             border-cyan-500/30
             backdrop-blur-md
             bg-black/20
             "
        >
            <p className="flex items-center text-sm font-medium text-cyan-300">
                &copy; 2025 Arif Özkan ÖZTÜRK. All rights reserved.
            </p>
            <ul className="flex items-center text-sm font-medium">
                <li>
                    <a
                        href={`/${lang}/contact`}
                        className="text-cyan-300 hover:text-cyan-100 hover:underline transition-colors duration-300 neon-text"
                    >
                        {dictionary['contact'].link}
                    </a>
                </li>
            </ul>
        </footer>
    )
}
