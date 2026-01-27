'use client'

import ReactFlagsSelect from 'react-flags-select'
import { usePathname, useRouter } from 'next/navigation'
import { languageObj } from '@/i18n/routing'
import { Locale } from 'use-intl'

export function LanguageSwitcher({ lang }: { lang: Locale }) {
    const router = useRouter()
    const currentPathname = usePathname()

    const onSelectChange = (value: string) => {
        const lng =
            (Object.keys(languageObj).find(
                (key) => languageObj[key] === value,
            ) as Locale) || 'en'

        const currentPathLocale = Object.keys(languageObj).find(
            (locale) =>
                currentPathname === `/${locale}` ||
                currentPathname.startsWith(`/${locale}/`),
        ) as Locale | undefined

        if (currentPathLocale) {
            router.push(currentPathname.replace(currentPathLocale, lng))
        } else {
            router.push(`/${lng}${currentPathname}`)
        }
    }

    return (
        <ReactFlagsSelect
            className="inline-flex font-extrabold text-neutral-600 dark:text-neutral-200"
            countries={['US', 'TR', 'FR']}
            customLabels={{
                US: 'ENGLISH',
                TR: 'TÜRKÇE',
                FR: 'FRANÇAIS',
            }}
            selected={languageObj[lang]}
            onSelect={onSelectChange}
        />
    )
}
