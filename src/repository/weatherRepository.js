const weatherRepository = {
    async getCurrentWeather(latitude, longitude){;
        try {
            const httpCall = await fetch(`${process.env.REACT_APP_API_WEATHER_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_WEATHER_KEY}`);
            const currentWeather =  await httpCall.json();
            return currentWeather;
            
        } catch (err) {
            console.log("Error : ", err);
        }
    },
    async getWeatherByName(city){;
        try {
            const httpCall = await fetch(`${process.env.REACT_APP_API_WEATHER_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_WEATHER_KEY}`);
            const currentWeather =  await httpCall.json();
            return currentWeather;
            
        } catch (err) {
            console.log("Error : ", err);
        }
    },
    async getForecastWeather(latitude, longitude){;
        try {
            const httpCall = await fetch(`${process.env.REACT_APP_API_WEATHER_URL}/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_WEATHER_KEY}&exclude=minutely,hourly`);
            const forecastWeather = await httpCall.json();
            return forecastWeather;
            
        } catch (err) {
            console.log("Error : ", err);
        }
    }
};

export default weatherRepository;