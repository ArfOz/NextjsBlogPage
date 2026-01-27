'use client'
import { Locale } from 'next-intl'
import { useEffect } from 'react'

export const ReportIncr = ({ lang }: { lang: Locale }) => {
    useEffect(() => {
        fetch('/api/incr', {
            body: JSON.stringify({ lang: lang }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
    }, [lang])

    return null
}
