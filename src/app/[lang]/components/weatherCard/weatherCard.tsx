import { CapitalizeFirstLetter } from '@/libs/stringOperations';
import { CardType, CityType, Country, Details } from '../types';
import { getDictionary } from 'get-dictionary';
import { Locale } from 'i18n-config';
import Cities from '@/libs/cities.json';

export default async function WeatherCard({
    data,
    lang,
}: {
    data: CardType;
    lang: Locale;
}) {
    const dictionary = await getDictionary(lang);
    const found = Cities.find((obj) => {
        let response = obj.Id == data.id;
        return response;
    }) || { Details: 'mine' };

    const country = data.sys.country as Country;
    const detail = found.Details as Details;
    return (
        <div className="md:w-[40rem] md:h-[16.5rem] w-[20.5rem] h-[40rem]  p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse mx-5 my-6">
            <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
                <div className=" text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
                    <h1>
                        {CapitalizeFirstLetter(data.weather[0].description)}
                    </h1>
                </div>
                <div className="flex flex-col justify-between h-full w-full relative border-2 border-white rounded-2xl">
                    <img
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt="thumbnail"
                        className=" rounded-2xl object-cover w-full h-48"
                    />
                    <div className=" text-white z-10 bg-[#5865F2] text-center rounded-b-2xl font-semibold">
                        <h1>{dictionary['weather'][detail]}</h1>
                    </div>
                </div>
            </div>

            <div className=" h-full w-full mr-2 rounded-2xl ">
                <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">
                    {dictionary['weather'][country]}
                </p>
                <h1 className="m-2 text-4xl font-bold dark:text-white">
                    {data.name}
                </h1>

                <div className=" pt-10 pr-2 pl-2 flex flex-row justify-around flex-wrap">
                    <div className="flex flex-row items-center m-2">
                        <h1 className="pl-1 dark:text-white">
                            {data.main.temp}° C
                        </h1>
                    </div>
                    <div className="flex flex-row items-center m-2">
                        <h1 className="pl-1 dark:text-white">
                            {dictionary['weather'].fells_like} :{' '}
                            {data.main.feels_like}
                        </h1>
                    </div>
                    <div className="flex flex-row items-center m-2">
                        <h1 className="pl-1 dark:text-white">
                            {data.main.humidity}%{' '}
                            {dictionary['weather'].humidity}
                        </h1>
                    </div>

                    <div className="flex flex-row items-center m-2">
                        <h1 className="pl-1 dark:text-white">
                            {dictionary['weather'].wind_speed} :{' '}
                            {data.wind.speed} m/s
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

//  <div className="w-full rounded-lg shadow-md lg:max-w-sm">
//             <img
//                 className="object-cover sm:text-3xl md:text-6xl"
//                 src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
//                 alt="icon"
//             />
//             <div className="pl-2">
//                 <h4 className="text-xl font-semibold tracking-tight text-blue-600">
//                     {data.name}, {dictionary['weather'][country]}
//                 </h4>
//                 <p className="mb-2 leading-normal">
//                     {dictionary['weather'].weather_forecast} :{' '}
//                     {CapitalizeFirstLetter(data.weather[0].description)}
//                     <br />
//                     {dictionary['weather'].temp} : {data.main.temp}
//                     <br />
//                     {dictionary['weather'].fells_like} : {data.main.feels_like}
//                     <br />
//                     {dictionary['weather'].humidity} : {data.main.humidity} %
//                     <br />
//                     {dictionary['weather'][detail]}
//                 </p>
//             </div>
//         </div>
