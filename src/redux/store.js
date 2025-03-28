
import { configureStore } from "@reduxjs/toolkit";
import  thunk  from "redux-thunk";
import taskReducer from "./reducers/taskReducer";
import authReducer from "./reducers/authReducer";
import weatherReducer from "./reducers/weatherReducer";

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState"); // Retrieve stored state
    return serializedState ? JSON.parse(serializedState) : undefined; // Parse and return or undefined if not found
  } catch (error) {
    console.error("Failed to load state from localStorage:", error); // Handle errors
    return undefined;
  }
};

// Function to save specific parts of the state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      tasks: state.tasks,
      auth: { isAuthenticated: state.auth.isAuthenticated }, // Persist authentication status
    });
    localStorage.setItem("appState", serializedState); // Store data
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
};

// Load the saved state from localStorage when initializing the store
const preloadedState = loadState();

// Configure the Redux store
const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer, 
    weather: weatherReducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add Redux Thunk middleware
  preloadedState, // Load the preloaded state from localStorage
});

// Subscribe to store changes and save them to localStorage
store.subscribe(() => {
  saveState(store.getState());
});


export default store;
