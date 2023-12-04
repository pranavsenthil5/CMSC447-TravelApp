// passing by <Weather defaultLocation= 'New York' />
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Weather = ({ defaultLocation }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const apiKey = '0a0f812e353be6b5282109f837de0186';

  const getWeather = async (location) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

    try {
      const weatherResponse = await fetch(weatherUrl);
      const forecastResponse = await fetch(forecastUrl);

      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();

      if (weatherResponse.ok && forecastResponse.ok) {
        setWeatherData(weatherData);
        setForecastData(forecastData);
      } else {
        alert(`Error: ${weatherData.message || forecastData.message}`);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  useEffect(() => {
    // Fetch weather data for the default location on component mount
    getWeather(defaultLocation);
  }, [defaultLocation]); // Fetch data whenever defaultLocation changes

  const handleSearch = () => {
    // Fetch weather data for the entered city
    getWeather(city);
  };

  const openWeatherCom = () => {
    if (weatherData && weatherData.coord) {
      const { lat, lon } = weatherData.coord;
      window.open(`https://weather.com/weather/today/l/${lat.toFixed(2)},${lon.toFixed(2)}`, '_blank');
    }
  };

  const extractUniqueDays = (list) => {
    const uniqueDays = [];
    list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const day = date.getDate();
      if (!uniqueDays.includes(day)) {
        uniqueDays.push(day);
      }
    });
    return uniqueDays;
  };

  const filterForecastByDay = (day, list) => {
    return list.filter((item) => {
      const date = new Date(item.dt * 1000);
      return date.getDate() === day;
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      {/* <Typography variant="h4" gutterBottom>
        Weather Forecast
      </Typography> */}
      {/* <div style={{ marginBottom: 20 }}>
        <TextField
          label="Enter City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginLeft: 10 }}>
          Search
        </Button>
      </div> */}
      {/* {weatherData && (
        <Card>
          <CardContent>
            <Typography variant="h2" component="div">
              {weatherData.main.temp} °C
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              marginTop={2}
            >
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="Weather Icon"
                style={{ width: 50, height: 50 }}
              />
              <Typography color="textSecondary" variant="h6" style={{ marginTop: 10 }}>
                {weatherData.weather[0].description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )} */}

      {/* make two components flex by row */}
      <div className="flex justify-between">
        {weatherData && (
          <Card className="max-w-xs mx-auto bg-white shadow-md rounded-md p-4">
            <CardContent>
              <Typography variant="h2" component="div" className="text-4xl font-bold">
                {weatherData.main.temp} °C
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                marginTop={2}
              >
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  alt="Weather Icon"
                  className="w-12 h-12"
                />
                <Typography color="textSecondary" variant="h6" style={{ marginTop: 10 }}>
                  {weatherData.weather[0].description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        )}
        {forecastData && (
          <Card style={{ marginTop: 20, width: '80%', margin: 'auto' }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                7-Day Forecast
              </Typography>
              <div className="flex justify-between">
                {extractUniqueDays(forecastData.list).map((day, index) => {
                  const filteredForecast = filterForecastByDay(day, forecastData.list);
                  const dayWeather = filteredForecast[0]; // Consider the first forecast data for the day
                  return (
                    <Box
                      key={index}
                      textAlign="center"
                      p={2}
                      borderRadius={8}
                      width="calc(100% / 7 - 10px)"
                      className="cursor-pointer mb-4"
                      onClick={() => openWeatherCom(dayWeather)}
                    >
                      <Typography variant="subtitle2">
                        {new Date(dayWeather.dt * 1000).toLocaleDateString('en-US', {
                          weekday: 'short',
                        })}
                      </Typography>
                      <img
                        src={`http://openweathermap.org/img/wn/${dayWeather.weather[0].icon}.png`}
                        alt="Weather Icon"
                        className="w-10 h-10 mx-auto mt-2"
                      />
                      <Typography color="textSecondary">{dayWeather.main.temp} °C</Typography>
                      {dayWeather.rain && dayWeather.rain['3h'] && (
                        <Typography color="textSecondary">
                          Rain: {dayWeather.rain['3h']} mm
                        </Typography>
                      )}
                    </Box>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>



      {/* {forecastData && (
        <Card style={{ marginTop: 20, width: '80%', margin: 'auto' }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              7-Day Forecast
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {extractUniqueDays(forecastData.list).map((day, index) => {
                const filteredForecast = filterForecastByDay(day, forecastData.list);
                const dayWeather = filteredForecast[0]; // Consider the first forecast data for the day
                return (
                  <Box
                    key={index}
                    textAlign="center"
                    p={2}
                    borderRadius={8}
                    width="calc(100% / 7 - 10px)"
                    style={{ cursor: 'pointer', marginBottom: 10 }}
                    onClick={() => openWeatherCom(dayWeather)}
                  >
                    <Typography variant="subtitle2">
                      {new Date(dayWeather.dt * 1000).toLocaleDateString(
                        'en-US',
                        { weekday: 'short' }
                      )}
                      </Typography>
                    <img
                      src={`http://openweathermap.org/img/wn/${dayWeather.weather[0].icon}.png`}
                      alt="Weather Icon"
                      style={{ width: 30, height: 30 }}
                    />
                    <Typography color="textSecondary">{dayWeather.main.temp} °C</Typography>
                    {dayWeather.rain && dayWeather.rain['3h'] && (
                      <Typography color="textSecondary">
                        Rain: {dayWeather.rain['3h']} mm
                      </Typography>
                    )}
                  </Box>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )} */}

    </div>
  );
};

export default Weather;
