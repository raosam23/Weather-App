import React, { createContext, useState } from 'react'


const WeatherContext = createContext()

const WeatherState = ({children})=>{
    const hostUrl = "http://localhost:5000"
    const initialResponse = []
    const [weather, SetWeather] = useState(initialResponse)
    const fetchWeather = async(location)=> {
        try {
            const response = await fetch(`${hostUrl}/weather/getweather`, {
                method : "POST",
                headers : {
                    'Content-Type': 'application/json'
                },
                body : {
                    "location" : location
                }
            })
            const json = await response.json()
            SetWeather(JSON.parse(json))
        } catch (error) {
            console.log(error)
        }
    }
    
    return (<WeatherContext.Provider value={{weather, fetchWeather}}>
        {children}
    </WeatherContext.Provider>)

}



export default WeatherState