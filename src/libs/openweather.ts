const api_key = process.env.OPENWEATHER_API!;
var requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
};

export async function OpenWeather(lat: string, lon: string) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`,
            requestOptions
        );
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
