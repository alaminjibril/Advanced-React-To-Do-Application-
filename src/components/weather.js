// src/components/Weather.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/actions/weatherActions";

const Weather = () => {
  const dispatch = useDispatch();
  const { weather, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather("Lagos")); // Fetch weather for default location
  }, [dispatch]);

  return (
    <div className="weather-container">
      {loading && <p>Loading weather...</p>}
      {error && <p className="text-danger">Error: {error}</p>}
      {weather && (
        <p>
          {weather.name}: {Math.round(weather.main.temp - 273.15)}°C
        </p>
      )}
    </div>
  );
};

export default Weather;
