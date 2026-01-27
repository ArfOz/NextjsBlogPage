'use client';
import { useEffect } from 'react';
import { Locale } from 'i18n-config';

export const ReportIncr = ({ lang }: { lang: Locale }) => {
    useEffect(() => {
        fetch('/api/incr', {
            body: JSON.stringify({ lang: lang }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
    }, [lang]);

    return null;
};
