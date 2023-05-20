import './App.css';
import InputLocation from './components/InputLocation/InputLocation';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <InputLocation />
      <WeatherCard />
    </div>
  );
}

export default App;
