
import { useState } from 'react';
import './App.css';
import InputLocation from './components/InputLocation/InputLocation';
import WeatherCard from './components/WeatherCard/WeatherCard';
import  WeatherState  from './context/Weather/WeatherState'
import Title from './components/Title/Title';

function App() {
  const initialValues = {
    place : "",
    temperature : 0,
    humidity : 0,
    weatherImg : "",
    desc : ""
  }
  const [details, setDetails] = useState(initialValues)
  const [error, setError] = useState(null)
  console.log(details);
  return (
    <div className="App">
      <WeatherState>
      <Title/>
      <InputLocation setDetails = {setDetails} error = {error} setError = {setError} />
      {(details!==initialValues) && <WeatherCard details = {details} error = {error} />}
      </WeatherState>
    </div>
  );
}

export default App;
