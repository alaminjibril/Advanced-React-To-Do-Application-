// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import taskReducer from "./reducers/taskReducer";
import authReducer from "./reducers/authReducer";
import weatherReducer from "./reducers/weatherReducer";

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      tasks: state.tasks, // Persist tasks
      auth: { isAuthenticated: state.auth.isAuthenticated }, // Persist auth status
    });
    localStorage.setItem("appState", serializedState);
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  preloadedState, // Load stored state on startup
});

// Subscribe to store changes and save them to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
