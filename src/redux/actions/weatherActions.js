import { getWeather } from "../../utils/weatherService";

export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";

export const fetchWeather = (city) => async (dispatch) => {
  dispatch({ type: FETCH_WEATHER_REQUEST });

  try {
    const weatherData = await getWeather(city);
    dispatch({ type: FETCH_WEATHER_SUCCESS, payload: weatherData });
  } catch (error) {
    dispatch({ type: FETCH_WEATHER_ERROR, payload: error.message });
  }
};
