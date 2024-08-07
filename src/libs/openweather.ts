import { Locale } from 'i18n-config'
import { CityArray } from './types'

const api_key = process.env.OPENWEATHER_API!
var requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
    cache: 'no-store',
}

export async function OpenWeather(id: number, lang: string) {
    try {
        console.log(
            'resssssssssssss',
            `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${api_key}&units=metric&lang=${lang}`
        )
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${api_key}&units=metric&lang=${lang}`,
            requestOptions
        )
        const data = response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}

export async function OpenWeatherIcon(id: string) {
    try {
        const response = await fetch(
            `https://openweathermap.org/img/wn/${id}@2x.png`,
            requestOptions
        )
        const data = response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}

export async function WeatherData(Cities: CityArray, lang: Locale) {
    let promises = []
    for (let index = 0; index < Cities.length; index++) {
        let city = Cities[index]
        let tmpPromise = OpenWeather(city.id, lang)
        promises.push(tmpPromise)
    }

    let data = await Promise.all(promises)

    return data
}
