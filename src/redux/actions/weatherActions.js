// Import the getWeather function from the weather service utility
import { getWeather } from "../../utils/weatherService";

// Define action types for weather fetching
export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS"; 
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR"; 

// Thunk action to fetch weather data for a given city
export const fetchWeather = (city) => async (dispatch) => {
  // Notify Redux store that weather data fetching has started
  dispatch({ type: FETCH_WEATHER_REQUEST }); 

  try {
    // Call the weather API service to fetch data
    const weatherData = await getWeather(city); 
    dispatch({ type: FETCH_WEATHER_SUCCESS, payload: weatherData }); 
  } catch (error) {
    dispatch({ type: FETCH_WEATHER_ERROR, payload: error.message }); 
  }
};
