import '../assets/css/weather.css';
import {useState, useEffect} from 'react';
import getWeather from "../services/getWeather";
import { BiMap } from "react-icons/bi";
import { GiWindsock } from "react-icons/gi";
import { GiDrop } from "react-icons/gi";

import Search from './Search';
import Favourites from './Favorites';


function Weather (){
    const [currentWeather, setCurrentWeather] = useState();
    const [forecastWeather, setForecastWeather] = useState();
    const [citySearch, setCitySearch] = useState('');


    useEffect(async () => {
       
        if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition(async function(position){
                setCurrentWeather(await getWeather.getCurrentWeather(position.coords.latitude, position.coords.longitude));
                setForecastWeather(await getWeather.getForecastWeather(position.coords.latitude, position.coords.longitude));
            });
        }

        if(citySearch){
            const newWeather = await getWeather.getWeatherByName(citySearch); 
            setCurrentWeather(newWeather);
            setForecastWeather(await getWeather.getForecastWeather(newWeather.position.lat, newWeather.position.long));
        }
        
    }, [citySearch]);

    return(
        <div className="container">
            <div className='search-bar'>
                <Search setCitySearch={setCitySearch}/>
            </div>
            <div className='weather-container'>
                <div className="weather__current-container">
                    <div className='favourites'>
                        {currentWeather?.city ? 
                            <Favourites city={currentWeather.city} /> 
                            : <></>
                        }
                    </div>
                    
                    <h2 className="weather__current-location-container">
                        <BiMap />
                        <p>{currentWeather?.city}</p>
                    </h2>
                    <div className="weather__current-icon">
                        <img src={`./assets/icons/${currentWeather?.icon}.png`}/> 
                    </div>
                    <p className="weather__current-weather">{currentWeather?.weather}</p>
                    <p className="weather__current-temperature">{currentWeather?.temperature}<small>°</small></p>
                    <div className='weather__current-extras'>
                        <p className="weather__current-wind"><GiWindsock/> {currentWeather?.wind} km/h</p>
                        <p className="weather__current-humidity"><GiDrop /> {currentWeather?.humidity}%</p>
                    </div>
                </div>
                <div className="weather__forecast-container">
                    <h2 className="weather__forecast-title">Forecast</h2>
                    
                    {forecastWeather?.map((weather, index) => {
                        return (
                            <div className='weather__forecast'>
                                <div key={index} className="weather__forecast-icon">
                                    <img src={`./assets/icons/${weather?.icon}.png`}/>
                                </div>
                                <div className='weather__forecast-temperature-container'>
                                    <p className="weather__forecast-temperature">{weather?.temperature}<small>°</small></p>
                                    <p className="weather__forecast-temperature-min">{weather?.temperature_min}<small>°</small></p>
                                    <p className="weather__forecast-temperature-max">{weather?.temperature_max}<small>°</small></p>
                                </div>                                    
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Weather;