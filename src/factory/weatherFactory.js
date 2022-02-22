const weatherFactory = {
    getWeather(weather){
        return {
            city: weather.name,
            temperature: Math.floor(Number(weather.main.temp) - 273.15),
            weather: weather.weather[0].main
        }
    }
};

export default weatherFactory;