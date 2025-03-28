// src/redux/actions/taskActions.js

// Action types for managing tasks
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK"; 
export const SET_TASKS = "SET_TASKS"; 

// Load tasks from local storage and dispatch them to the Redux store
export const loadTasks = () => (dispatch) => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || []; 
  dispatch({ type: SET_TASKS, payload: savedTasks });
};

// Add a new task, update the Redux store, and persist to local storage
export const addTask = (task) => (dispatch, getState) => {
  dispatch({ type: ADD_TASK, payload: task }); 

  // Get the updated tasks from Redux store and save to local storage
  const updatedTasks = [...getState().tasks, task]; 
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

// Remove a task, update the Redux store, and persist changes to local storage
export const removeTask = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_TASK, payload: id }); 

  // Filter out the removed task and update local storage
  const updatedTasks = getState().tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};
