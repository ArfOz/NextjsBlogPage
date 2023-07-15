'use client';
import React, { useEffect, use } from 'react';
import { useTranslation } from '../../../../i18n/client.js';
import { languages, languageObj } from '../../../../i18n/settings';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Us } from 'react-flags-select';
import ReactFlagsSelect from 'react-flags-select';

// async function getTrans(lng) {
//     const { t } = await useTranslation(lng, 'common');
//     console.log('nasılsın', t);
//     return t;
// }
export default function LanguageSwitcher({ t, lng, path = '' }) {
    const pathname = usePathname();
    const router = useRouter();
    const currentPathname = usePathname();
    const onSelectChange = async (e) => {
        const lang = Object.keys(languageObj).find(
            (key) => languageObj[key] === e
        );

        const currentPathLocale = languages.find(
            (locale) =>
                currentPathname === `/${locale}` ||
                currentPathname.startsWith(`/${locale}/`)
        );

        if (currentPathLocale) {
            // replace the locale in the current pathname
            router.push(currentPathname.replace(currentPathLocale, lang));
        } else {
            router.push(`/${lang}${currentPathname}`);
        }
    };

    return (
        <div className="text-gray-400">
            <ReactFlagsSelect
                countries={['US', 'TR']}
                customLabels={{
                    US: 'ENGLISH',
                    TR: 'TÜRKÇE',
                }}
                selected={languageObj[lng].toUpperCase()}
                onSelect={onSelectChange}
            />
        </div>
    );
}
