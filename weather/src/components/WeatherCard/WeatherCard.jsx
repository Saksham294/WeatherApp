import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import './WeatherCard.css';

const backgroundImages = [
    {
        weather: "Clear",
        imgUrl: "https://images.unsplash.com/photo-1609376224342-8902c39a3675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJsdWUlMjBza3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        weather: "Clouds",
        imgUrl: "https://images.unsplash.com/photo-1607481416366-c8daccb8f3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWQlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        weather: "Rain",
        imgUrl: "https://images.unsplash.com/photo-1618329397023-cc688d12bb79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        weather: "Snow",
        imgUrl: "https://images.unsplash.com/photo-1602522785557-d48e28bec2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5pZ2h0JTIwc25vd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        weather: "Thunderstorm",
        imgUrl: "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGh1bmRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        weather: "Drizzle",
        imgUrl: "https://images.unsplash.com/photo-1541919329513-35f7af297129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpenpsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        weather: "Mist",
        imgUrl: "https://images.unsplash.com/photo-1603794052293-650dbdeef72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWlzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        weather: "Smoke",
        imgUrl: "https://images.unsplash.com/photo-1609150630864-0479ebc9de56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtb2tlJTIwc2t5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    {
        weather: "Haze",
        imgUrl: "https://images.unsplash.com/photo-1534818509150-ac05235effb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
];

const WeatherCard = ({
    city,
    weather,
    temperature,
    minTemp,
    maxTemp,
    humidity,
    windSpeed,
    date,
}) => {
    const [backgroundImage, setBackgroundImage] = useState("");

    useEffect(() => {
        const matchingImage = backgroundImages.find(
            (image) => image.weather === weather
        );
        if (matchingImage) {
            setBackgroundImage(matchingImage.imgUrl);
        }
    }, [weather]);

    return (
        <div className="card">
            <div className="background">
                <div className="subBackgroundContainer">
                    <img src={backgroundImage} alt="" />
                    <div className="subBackgroundTextContainer">
                        <Typography variant="h6">
                            {city}
                        </Typography>
                        <Typography variant="h6">
                            {date}
                        </Typography>

                        <div className="currentTemperature">
                            <Typography variant="h2">{temperature}°C</Typography>
                        </div>

                        {minTemp}°C / {maxTemp}°C

                        <Typography variant="h6">
                            {weather}
                        </Typography>
                    </div>
                </div>

                <div className="textContainer">
                    <Typography sx={{marginTop: "2vw" }} variant="h6">
                        Humidity: {humidity}%
                    </Typography>

                    <Typography variant="h6">
                        Wind Speed: {windSpeed} km/h
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;