const api_key = process.env.OPENWEATHER_API!;
var requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
    cache: 'no-store',
};

export async function OpenWeather(id: number, lang: string) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${api_key}&units=metric&lang=${lang}`,
            requestOptions
        );
        const data = response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function OpenWeatherIcon(id: string) {
    try {
        const response = await fetch(
            `https://openweathermap.org/img/wn/${id}@2x.png`,
            requestOptions
        );
        const data = response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}
