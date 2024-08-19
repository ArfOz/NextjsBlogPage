'use client'
import React, { useEffect, useState } from 'react'
import Cities from '@/libs/cities.json'
import { OpenWeather } from '@/libs/openweather'
import { Locale } from 'i18n-config'
import { OpenWeatherResponse } from '../types'

export function Weathernavbar({ lang }: { lang: Locale }) {
    // To reduce take instant weather forecast multiple cities after for promise all
    const [weather, setWeather] = useState<OpenWeatherResponse>()

    useEffect(() => {
        async function getWeather(lang: Locale) {
            let city = Cities[0]
            const data = await OpenWeather(city.Id, lang)

            setWeather(data)
        }
        getWeather(lang)
    }, [lang])

    return (
        <div className="ml-12">{`${weather?.name} : ${weather?.main?.temp} °C `}</div>
    )
}
