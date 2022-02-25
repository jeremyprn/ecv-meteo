import weatherRepository from "../repository/weatherRepository";
import weatherFactory from "../factory/weatherFactory";

const Weather = { 
    async getCurrentWeather(latitude, longitude){
        if(latitude !== undefined && longitude !== undefined){
            const dataWeather = await weatherRepository.getCurrentWeather(latitude, longitude);
            const weather = weatherFactory.getCurrentWeather(dataWeather);
            return weather;
        }
    },
    async getForecastWeather(latitude, longitude){
        if(latitude !== undefined && longitude !== undefined){
            let forecastWeather = [];
            const dataWeather = await weatherRepository.getForecastWeather(latitude, longitude);
            dataWeather.daily.forEach(weather => {
                forecastWeather.push(weatherFactory.getForecastWeather(weather));
            });
            
            return forecastWeather;
        }
    },
    async getWeatherByName(city){
        if(city !== undefined){
            const dataWeather = await weatherRepository.getWeatherByName(city);
            const weather = weatherFactory.getCurrentWeather(dataWeather);
            // console.log(dataWeather)
            return weather;
        }
    }
}

export default Weather;


