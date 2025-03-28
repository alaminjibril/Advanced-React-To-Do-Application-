import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_ERROR,
  } from "../actions/weatherActions";
  
  const initialState = {
    weather: null,
    loading: false,
    error: null,
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER_REQUEST:
        return { ...state, loading: true, error: null };
        
      case FETCH_WEATHER_SUCCESS:
        return { ...state, weather: action.payload, loading: false };
  
      case FETCH_WEATHER_ERROR:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  