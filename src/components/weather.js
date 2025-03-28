import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/actions/weatherActions";

const Weather = () => {
  const dispatch = useDispatch();

  // Extract weather data, loading state, and error message from Redux store
  const { weather, loading, error } = useSelector((state) => state.weather);

  // Fetch weather data when the component mounts
  useEffect(() => {
    dispatch(fetchWeather("Lagos")); // Fetch weather for the default location (Lagos)
  }, [dispatch]);

  return (
    <div className="weather-container">
      {/* Show loading indicator while fetching data */}
      {loading && <p>Loading weather...</p>}

      {/* Display error message if fetching fails */}
      {error && <p className="text-danger">Error: {error}</p>}

      {/* Display weather information if available */}
      {weather && (
        <p>
          {weather.name}: {Math.round(weather.main.temp - 273.15)}°C
        </p>
      )}
    </div>
  );
};

export default Weather;
