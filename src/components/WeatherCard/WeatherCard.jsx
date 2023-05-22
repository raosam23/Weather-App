import React, { useContext } from "react";
import WeatherContext from "../../context/Weather/WeatherContext";
import './WeatherCard.css'

export default function WeatherCard(props) {

  const context = useContext(WeatherContext)
  const { error } = context
  const capitalize = (str)=>{
    const capStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capStr
  }
  const { place, temperature,humidity, weatherImg, desc } = props.details
  const capDesc = capitalize(desc)
  console.log(props.details)

  return (
    <div>
      
      {(!error) && <div className="card mx-auto" style={{width : "18rem"}}>
        <img src={`https://openweathermap.org/img/wn/${weatherImg}@2x.png`} className="card-img mx-auto" alt="Loading..." style={{width : "7rem", height : "7rem"}} />
        <div className="card-body">
          <h2>{place}</h2>
          <h5 className="card-title">{`Temperature : ${temperature}℃`}</h5>
          <h5 className="card-title">{`Humidity : ${humidity}%`}</h5>
          <p className="card-text">
            {capDesc}
          </p>
        </div>
      </div>}
      </div>
  );
}
