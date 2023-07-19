import { useTranslation } from '@/i18n';
import { fallbackLng, languages } from '@/i18n/settings';
import React, { use } from 'react';

async function getTrans(lng: string) {
    const { t } = await useTranslation(lng, 'common');
    return t;
}
export default function Footer({ lng }: { lng: string }) {
    if (languages.indexOf(lng) < 0) lng = fallbackLng;
    const t = use(getTrans(lng));
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
            <p className="text-sm sm:text-center dark:text-gray-800">
                &copy; 2023 Arif Özkan ÖZTÜRK. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-800 sm:mt-0">
                <li>
                    <a href={`/${lng}/contact`} className="hover:underline">
                        {t('contact.link')}
                    </a>
                </li>
            </ul>
        </footer>
    );
}
