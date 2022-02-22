import { useEffect, useState } from "react";
import Weather from "../services/getWeather";

function Home (){
    const [currentWeather, setCurrentWeather] = useState();
    useEffect(async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition(async function(position){
                setCurrentWeather(await Weather.getWeather(position.coords.latitude, position.coords.longitude));
            });
        }  
    }, []);

    return(
        <div>
            <h2>{currentWeather?.city}</h2>
            <h2>{currentWeather?.temperature}</h2>
            <h2>{currentWeather?.weather}</h2>
        </div>
       

    )
}

export default Home;