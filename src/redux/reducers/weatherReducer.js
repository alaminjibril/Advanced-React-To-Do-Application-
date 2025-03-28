// Import action types for handling weather-related API requests
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
} from "../actions/weatherActions";

// Define the initial state for the weather data
const initialState = {
  weather: null, // Stores fetched weather data
  loading: false, 
  error: null, // Stores any error messages from failed API calls
};

// Reducer function to handle weather-related actions
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      // Set loading to true when a weather request is initiated, reset error
      return { ...state, loading: true, error: null };

    case FETCH_WEATHER_SUCCESS:
      // Store the received weather data and set loading to false
      return { ...state, weather: action.payload, loading: false };

    case FETCH_WEATHER_ERROR:
      // Store the error message and stop loading
      return { ...state, loading: false, error: action.payload };

    default:
      // Return the current state if no recognized action type is found
      return state;
  }
};

export default weatherReducer;
