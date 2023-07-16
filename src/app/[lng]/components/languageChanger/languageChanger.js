'use client';
import React, { useEffect, use } from 'react';
import { languages, languageObj } from '../../../../i18n/settings';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import ReactFlagsSelect from 'react-flags-select';

export default function LanguageSwitcher({ t, lng, path = '' }) {
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
