const weatherRepository = {
    async getWeather(latitude, longitude){;
        try {
            const httpCall = await fetch(`${process.env.REACT_APP_API_WEATHER_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_WEATHER_KEY}`);
            const currentWeather =  await httpCall.json();
            return currentWeather;
            
        } catch (err) {
            console.log("Error : ", err);
        }
    },
};

export default weatherRepository;