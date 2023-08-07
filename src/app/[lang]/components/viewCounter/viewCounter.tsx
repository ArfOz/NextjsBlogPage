'use client';
import { useEffect, useState } from 'react';
import { Locale } from '../../../../../i18n-config';
import { getViews } from '@/libs/upstash.redis';
export default function ViewCounter({ lang }: { lang: Locale }) {
    const [views, setViews] = useState('...');
    useEffect(() => {
        async function getView(lang: Locale) {
            const res = (await getViews(lang)).toString();
            setViews(res);
        }
        getView(lang);
    }, [lang]);

    return <div>{views}</div>;
}
