const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Use an environment variable to store the API key securely
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// Function to fetch weather data using latitude and longitude
export const getWeather = async (latitude, longitude) => {
  try {
    // Ensure API key is available
    if (!API_KEY) {
      throw new Error("Missing API key. Check your .env file.");
    }

    // Make a request to the OpenWeather API
    const response = await fetch(
      `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    // Parse the JSON response
    const data = await response.json();

    // Check if the request was successful
    if (response.ok) {
      return {
        temperature: data.main.temp, // Temperature in Celsius
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      };
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null; // Return null if there is an error
  }
};
