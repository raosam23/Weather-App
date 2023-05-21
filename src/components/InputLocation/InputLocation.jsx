import React, { useState, useContext } from "react";

import WeatherContext from "../../context/Weather/WeatherContext";
import Failure from "../Failure/Failure";

export default function InputLocation(props) {

  const context = useContext(WeatherContext)
  const {fetchWeather} = context;

  // const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState("");
 

  const handleOnChange = (event) => {
    setLocation(event.target.value);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    // console.log(location)
    console.log(location)
    // setLoading(true)
    try{
      const data = await fetchWeather(location)
      console.log(data)
      // setLoading(false)
      // console.log(data)
      props.setDetails({
        place : location,
        temperature : data.main.temp,
        humidity : data.main.humidity,
        weatherImg : data.weather[0].icon,
        desc : data.weather[0].description
      })
      props.setError(null)
    }
    catch(err) {
      console.log("This is the error",err)
      props.setError(err)
    }
    setLocation("")
    // console.log(data.main.temp)
    // console.log(data.main.humidity)
  };
  
  return (
    <>
    <div className="my-5 d-flex justify-content-center">
      <form onSubmit={handleOnSubmit} autoComplete="off">
        <div className="mb-3">
          <label htmlFor="loc" className="form-label my-3">
            <h2>Location</h2>
          </label>
          <input
            name="loc"
            type="text"
            className="form-control"
            id="loc"
            aria-describedby="emailHelp"
            placeholder="Enter the name of a city"
            value={location}
            onChange={handleOnChange}
            required
            pattern="[A-Za-z\s]+"
            title="Only Alphabets allowed"
            autoComplete="false"
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Go
        </button>
      </form>
    </div>
    {props.error && <Failure/>}
    </>
  );
}
