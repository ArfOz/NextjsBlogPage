'use client'
import React, { useEffect, useState } from 'react'
import Cities from '@/libs/cities.json'
import { OpenWeather } from '@/libs/openweather'
import { Locale } from 'i18n-config'

export function Weathernavbar({ lang }: { lang: Locale }) {
    // To reduce take instant weather forecast multiple cities after for promise all
    const [weather, setWeather] = useState('...')

    useEffect(() => {
        async function getWeather(lang: Locale) {
            let city = Cities[0]
            console.log('useeffect', city.Id, lang)
            const data = (await OpenWeather(city.Id, lang)).toString()

            console.log('ic', data)

            setWeather(data)
        }
        getWeather(lang)
    }, [lang])

    console.log('ariff', weather)
    return <div>{weather}</div>
}
