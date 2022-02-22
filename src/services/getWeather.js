import weatherRepository from "../repository/weatherRepository";
import weatherFactory from "../factory/weatherFactory";

const Weater = { 
    async getWeather(latitude, longitude){
        if(latitude != undefined && longitude != undefined){
            const dataWeather = await weatherRepository.getWeather(latitude, longitude);
            const weather = await weatherFactory.getWeather(dataWeather);
            return weather;
        }
    }
}

export default Weater;


