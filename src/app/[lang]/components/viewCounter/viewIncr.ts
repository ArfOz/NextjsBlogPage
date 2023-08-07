'use client';
import React, { use, useEffect } from 'react';
import { Locale } from '../../../../../i18n-config';

// const view = async (lang: any) => {
//     await fetch('/api/incr', {
//         body: JSON.stringify(lang),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         method: 'POST',
//     });
//     return null;
// };

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

// export const ReportView = async (lang: any) => {
//     const res = await fetch('/api/incr', {
//         body: JSON.stringify(lang),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         method: 'POST',
//     });

//     console.log(res);

//     return null;
// };
