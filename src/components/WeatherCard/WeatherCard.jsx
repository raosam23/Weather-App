import React from "react";

export default function WeatherCard() {
    const temp = 45
    const humid = 30
  return (
      <div className="card mx-auto" style={{width : "18rem"}}>
        <img src="https://openweathermap.org/img/wn/11n@2x.png" className="card-img mx-auto" alt="..." style={{width : "7rem", height : "7rem"}} />
        <div className="card-body">
          <h5 className="card-title">{`Temperature : ${temp}℃`}</h5>
          <h5 className="card-title">{`Humidity : ${humid}%`}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque animi voluptas porro doloremque ea, ipsum assumenda atque nobis iste.
          </p>
        </div>
      </div>
  );
}
