Advanced Todo App

A feature-rich task management application built with React and Redux, integrating a weather API to display relevant weather conditions for outdoor tasks.

Features

Add, edit, and delete tasks

Set task priority (High, Medium, Low)

Persistent storage using local storage

Weather integration for outdoor-related tasks

Redux for state management

API calls handled with Redux Thunk

Error handling for API requests

Technologies Used

React.js

Redux (Redux Toolkit, Redux Thunk)

Bootstrap for styling

OpenWeather API

Local Storage for data persistence

Installation

Clone the repository:

git clone https://github.com/your-username/advanced-todo.git
cd advanced-todo

Install dependencies:

npm install

Create a .env file in the root directory and add your OpenWeather API key:

REACT_APP_WEATHER_API_KEY=your_api_key_here

Start the development server:

npm start

API Configuration

The weather service is configured in src/utils/weatherService.js. It fetches weather data based on task-related locations.

To use it, replace your_api_key_here with your actual API key from OpenWeather.
