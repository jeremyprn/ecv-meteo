const weatherFactory = {
    getCurrentWeather(weather){
        let date = new Date(Date.now() + weather.timezone-1 * 1000);
        let cycle = null;
        if(date.getHours() >8 && date.getHours() < 20){
            cycle = 'day';
        }
        else{
            cycle ='night';
        }

        return {
            position : {
                lat : weather.coord.lat,
                long: weather.coord.lon
            },
            city: weather.name,
            temperature:Math.floor(weather.main.temp - 273.15),
            humidity: weather.main.humidity,
            wind: `${Math.floor(weather.wind.speed  * 3.6)}`,
            weather: weather.weather[0].main, 
            icon: weather.weather[0].icon,
            date: date,
            cycle: cycle
        }
    },
    getForecastWeather(weather){
        // console.log(weather);
        return {
            temperature: Math.floor(weather.temp.day - 273.15),
            temperature_min:  Math.floor(weather.temp.min - 273.15),
            temperature_max:  Math.floor(weather.temp.max - 273.15),
            weather: weather.weather[0].main,
            icon: weather.weather[0].icon
        }
    }
};

export default weatherFactory;