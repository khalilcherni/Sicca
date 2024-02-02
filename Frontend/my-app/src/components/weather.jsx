// Import CSS

import { useState } from 'react';

// Import images
import sunnyImage from '../images/sunny.avif';
import rainyImage from '../images/rainy.avif';
import cloudyImage from '../images/cloudy.avif';
import unknownImage from '../images/unknownImage.avif';
import './weather.css'
const weatherImages = {
  clear: sunnyImage,
  rain: rainyImage,
  clouds: cloudyImage,
  unknown: unknownImage,
};

const WeatherInfo = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);

  const handleInputChange = (e) => setCity(e.target.value);

  const getWeather = () => {
    const apiKey = '3ac980513bf7c529632b853b2d4b0898';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { main, wind, weather, name } = data;
        const MT = Math.round(main.temp);
        const FL = Math.round(main.feels_like);

        const weatherConditionImage = weatherImages[weather[0].main.toLowerCase()] || unknownImage;

        const weatherData = {
          location: `Weather in ${name}`,
          temperature: `Temperature: ${MT} C`,
          feelsLike: `Feels Like: ${FL} C`,
          humidity: `Humidity: ${main.humidity} %`,
          wind: `Wind: ${wind.speed} km/h`,
          condition: `Weather Condition: ${weather[0].description}`,
          conditionImage: weatherConditionImage,
        };

        setWeatherInfo(weatherData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className='weather-container'
      style={{
        backgroundImage: `url(${weatherInfo ? weatherInfo.conditionImage : ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '20px', // Adjust padding as needed
        borderRadius: '10px', // Optional: Add border-radius for a rounded appearance
      }}
    >
      <input
        type='text'
        placeholder='Enter city name'
        value={city}
        onChange={handleInputChange}
        style={{ marginBottom: '10px' }}
      />
      <button  className='button-55' onClick={getWeather}>Get Weather</button>
      {weatherInfo && (
        <div className='weather-info'>
          <h3>{weatherInfo.location}</h3>
          {Object.values(weatherInfo).slice(1, -1).map((info, index) => (
            <h1 className='c' key={index}>{info}</h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
