import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import { v4 as uuidv4 } from "uuid"; // Generates unique task IDs
import { getWeather } from "../utils/weatherService";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // OpenWeatherMap API Key

const TaskInput = () => {
  // State for managing task input, priority, and location
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [location, setLocation] = useState("Fetching...");
  const dispatch = useDispatch();

  // Fetch user's location using browser's geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Reverse geocoding to get location name from latitude and longitude
          const res = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`
          );
          const data = await res.json();
          
          // Set the fetched location or fallback to "Unknown"
          if (data.length > 0 && data[0].name) {
            setLocation(data[0].name);
          } else {
            setLocation("Unknown");
          }
        } catch (error) {
          console.error("Error fetching location:", error);
          setLocation("Unknown");
        }
      });
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  // Function to add a task with optional weather data
  const handleAddTask = async () => {
    if (task.trim() === "") return; // Prevent empty task submissions

    let weather = null;

    // Check if the task involves outdoor activities
    const outdoorKeywords = ["walk", "run", "hike", "picnic", "football", "cycling"];
    if (outdoorKeywords.some((keyword) => task.toLowerCase().includes(keyword)) && location !== "Unknown") {
      weather = await getWeather(location); // Fetch weather data for outdoor tasks
    }

    // Create a new task object
    const newTask = {
      id: uuidv4(),
      text: task,
      priority: priority,
      weather: weather, // Attach weather data if applicable
    };

    dispatch(addTask(newTask)); // Dispatch action to add task to Redux store

    // Reset input fields after adding task
    setTask("");
    setPriority("Medium");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0 p-4">
        <h4 className="text-center mb-3 text-primary">📝 Add New Task</h4>

        <div className="d-flex flex-column flex-md-row gap-2">
          <input
            type="text"
            className="form-control border-primary w-100"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()} // Allow Enter key to submit
          />

          <select
            className="form-select border-primary w-100"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">🔥 High</option>
            <option value="Medium">⚡ Medium</option>
            <option value="Low">✅ Low</option>
          </select>

          <button className="btn btn-primary w-100" onClick={handleAddTask}>
            ➕ Add Task
          </button>
        </div>

        <p className="mt-2 text-center text-muted">
          🌍 Detected Location: <strong>{location}</strong>
        </p>
      </div>
    </div>
  );
};

export default TaskInput;
