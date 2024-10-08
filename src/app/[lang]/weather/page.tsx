import { OpenWeather } from '@/libs/openweather'
import { Locale } from 'i18n-config'
import Cities from '@/libs/cities.json'
import WeatherCard from '../components/weatherCard/weatherCard'

export default async function WeatherPage({
    params: { lang },
}: {
    params: { lang: Locale }
}) {
    let promises = []
    // To reduce take instant weather forecast multiple cities after for promise all
    for (let index = 0; index < Cities.length; index++) {
        let city = Cities[index]
        let tmpPromise = OpenWeather(city.Id, lang)
        promises.push(tmpPromise)
    }

    let resolvedData = await Promise.all(promises)

    return (
        <div className="p-4 mb-16 lg:flex lg:flex-row justify-center sm:-my-px sm:ml-6 sm:flex sm:flex-col">
            {resolvedData.map((item) => (
                <WeatherCard key={item.name} data={item} lang={lang} />
            ))}
        </div>
    )
}
