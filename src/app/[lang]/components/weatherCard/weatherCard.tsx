import { CapitalizeFirstLetter } from '@/libs/stringOperations';
import { CardType, Country } from '../types';
import { getDictionary } from 'get-dictionary';
import { Locale } from 'i18n-config';

export default async function WeatherCard({
    data,
    lang,
}: {
    data: CardType;
    lang: Locale;
}) {
    const dictionary = await getDictionary(lang);

    const country = data.sys.country as Country;
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover sm:text-3xl md:text-6xl"
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="icon"
            />
            <div className="pl-2">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    {data.name}, {dictionary['weather'][country]}
                </h4>
                <p className="mb-2 leading-normal">
                    {dictionary['weather'].weather_forecast} :{' '}
                    {CapitalizeFirstLetter(data.weather[0].description)}
                    <br />
                    {dictionary['weather'].temp} : {data.main.temp}
                    <br />
                    {dictionary['weather'].fells_like} : {data.main.feels_like}
                    <br />
                    {dictionary['weather'].humidity} : {data.main.humidity} %
                </p>
            </div>
        </div>
    );
}
