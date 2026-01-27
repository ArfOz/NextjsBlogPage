'use client'
import { useEffect, useState } from 'react'
import { getViews } from '@/libs/upstash.redis'
import { Locale } from 'next-intl'

export function ViewCounter({ lang }: { lang: Locale }) {
    const [views, setViews] = useState('...')
    useEffect(() => {
        async function getView(lang: Locale) {
            const res = (await getViews(lang)).toString()
            setViews(res)
        }
        getView(lang)
    }, [lang])

    return <div>{views}</div>
}
