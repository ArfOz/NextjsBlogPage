import { OpenWeather } from '@/libs/openweather';
import { Locale } from 'i18n-config';
import Cities from '@/libs/cities.json';
import WeatherCard from '../components/weatherCard/weatherCrad';

export default async function WeatherPage({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    console.log('cities', Cities);

    let promises = [];
    for (let index = 0; index < Cities.length; index++) {
        let city = Cities[index];
        let tmpPromise = OpenWeather(city.Lat, city.Lon);
        promises.push(tmpPromise);
    }

    let resolved = await Promise.all(promises);

    console.log('resolved', resolved);

    return (
        <div className="p-4 mb-16">
            <ul className="list-disc mx-4">
                -------------------Only in English-------------------
                <li>Live Weather</li>
                {resolved.map((item) => {
                    return <WeatherCard key={item.name} data={item} />;
                })}
            </ul>
        </div>
    );
}
