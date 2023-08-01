'use client';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import ReactFlagsSelect from 'react-flags-select';
import { Locale, languageObj, i18n } from '../../../../../i18n-config';

export default async function LanguageSwitcher({ lang }: { lang: Locale }) {
    const router = useRouter();
    const currentPathname = usePathname();

    type Values = (typeof languageObj)[keyof typeof languageObj];

    const onSelectChange = async (e: Values) => {
        let lng =
            Object.keys(languageObj).find((key) => {
                return languageObj[key] === e;
            }) || 'en';
        const currentPathLocale = i18n.locales.find(
            (locale) =>
                currentPathname === `/${locale}` ||
                currentPathname.startsWith(`/${locale}/`)
        );
        if (currentPathLocale) {
            // replace the locale in the current pathname
            router.push(currentPathname.replace(currentPathLocale, lng));
        } else {
            router.push(`/${lng}${currentPathname}`);
        }
    };

    return (
        <ReactFlagsSelect
            className="inline-flex font-extrabold"
            countries={['US', 'TR']}
            customLabels={{
                US: 'ENGLISH',
                TR: 'TÜRKÇE',
            }}
            selected={languageObj[lang].toUpperCase()}
            onSelect={onSelectChange}
        />
    );
}
