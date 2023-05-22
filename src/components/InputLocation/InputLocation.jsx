import React, { useState, useContext } from "react";

import WeatherContext from "../../context/Weather/WeatherContext";
import Failure from "../Failure/Failure";
import './InputLocation.css'
import Spinner from "../Spinner/Spinner";

export default function InputLocation(props) {

  const context = useContext(WeatherContext)
  const {fetchWeather, error, setError, loading, setLoading} = context;

  const [location, setLocation] = useState("");
 

  const handleOnChange = (event) => {
    setLocation(event.target.value);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try{
      setLoading(true)
      const data = await fetchWeather(location.trim())
      setLoading(false)
      props.setDetails({
        place : location,
        temperature : data.main.temp,
        humidity : data.main.humidity,
        weatherImg : data.weather[0].icon,
        desc : data.weather[0].description
      })
      setError(null)
    }
    catch(err) {
      setError(err)
    }
    setLocation("")
  };
  
  return (
    <>
    <div className="my-5 d-flex justify-content-center" style={{backgroundImage : "none"}}>
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
        <button type="submit" className="btn btn-outline-success my-3">
          <span className="btnText">Go</span>
        </button>
      </form>
    </div>
    {loading && <Spinner/>}
    {(error && !loading) && <Failure/>}
    </>
  );
}
