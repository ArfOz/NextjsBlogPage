'use client';

import { useEffect } from 'react';

import { useTranslation } from '../../../i18n';
import { use } from 'react';

async function getTrans(lng: string) {
    const { t } = await useTranslation(lng, 'common');
    return t;
}
export default function Todos({
    params: { lng },
}: {
    params: { lng: string };
}) {
    const t = use(getTrans(lng));

    return (
        <div className="p-4 mb-16">
            <ul className="list-disc mx-4">
                -------------------English-------------------
                <li>Photos</li>
                <li>Social Login</li>
                <li>
                    Update with nextjs features(Loading page, error page ....)
                </li>
            </ul>
        </div>
    );
}
