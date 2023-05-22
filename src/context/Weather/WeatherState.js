
import { useState } from "react";
import WeatherContext from "./WeatherContext";

const WeatherState = (props) => {
  const hostURL = "http://localhost:5000";
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchWeather = async (location) => {
    try{
        console.log(location)
        const response = await fetch(`${hostURL}/weather/getweather`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ location: location }),
        });
        const data = await response.json();
        return data
        }
        catch(err) {
            return err;
        }
    } 

  
  return (
    <WeatherContext.Provider value={{ fetchWeather, error, setError, loading, setLoading }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
