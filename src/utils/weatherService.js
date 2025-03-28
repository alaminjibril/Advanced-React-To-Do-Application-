// src/utils/weatherService.js
const API_KEY = "da6a68457b06d8e97209d652b013811b"; // Replace with your API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    if (response.ok) {
      return {
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      };
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Weather API Error:", error);
    return null;
  }
};
