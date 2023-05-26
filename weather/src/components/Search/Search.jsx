import React, { useState } from 'react'
import './Search.css'
import axios from 'axios';
import WeatherCard from '../WeatherCard/WeatherCard';
import { Button, TextField, Typography } from '@mui/material';


const Search = () => {
    const [weather, setWeather] = useState([])
    const [city, setCity] = useState('')
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`

    const getWeather = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get(url)
            setWeather(res.data)
            console.log(res.data)

        } catch (error) {
            setError(error);
            setWeather([]);
        }
        finally {
            setLoading(false);
        }
    }


    return (
        <div className='main'>
            <Typography className='heading' sx={{ textAlign: "center", paddingTop: "2.5vw" }} variant='h2'>Weather App</Typography>
            <div className="search">
                <div className="searchBar">
                    <TextField
                        className='searchInput'
                        sx={{ width: '20%' }}
                        label="Search City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                getWeather();
                            }
                        }}
                    />
                    <Button variant="contained" sx={{ backgroundColor: "#2a9df4" }} onClick={getWeather}>Search</Button>
                </div>
                {error && <p className="error">Oops something went wrong...</p>}
                {weather.main && (
                    <WeatherCard
                        city={weather.name}
                        weather={weather.weather[0].main}
                        date={new Date().toLocaleDateString()}
                        temperature={Math.round(weather.main.temp - 273.15)}
                        feelsLike={Math.round(weather.main.feels_like - 273.15)}
                        minTemp={Math.round(weather.main.temp_min - 273.15)}
                        maxTemp={Math.round(weather.main.temp_max - 273.15)}
                        humidity={weather.main.humidity}
                        windSpeed={weather.wind.speed}
                    />
                )
                }


            </div>

        </div>
    )
}

// {weather.main && (
//     <div className="weather">
//     <h1>    
//         City
//         {weather.name}</h1>
//     <h2>
//         Weather
//         {weather.weather[0].main}</h2>
//     <h2>
//         Temperature
//          {Math.round(weather.main.temp - 273.15)}°C</h2>
//     <h2> 
//         Feels Like
//         {Math.round(weather.main.feels_like - 273.15)}°C</h2>
//     <h2>
//         Min Temp
//         {Math.round(weather.main.temp_min - 273.15)}°C</h2>
//     <h2>
//         Max Temp
//         {Math.round(weather.main.temp_max - 273.15)}°C</h2>
//     <h2>
//         Humidity
//         {weather.main.humidity} %</h2>
//     <h2>
//         Wind Speed
//         {weather.wind.speed} km/h</h2>
//     </div>
// )}
export default Search
