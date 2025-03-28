// src/redux/reducers/taskReducer.js
import { ADD_TASK, REMOVE_TASK, SET_TASKS } from "../actions/taskActions";

const initialState = JSON.parse(localStorage.getItem("tasks")) || []; // Load tasks from localStorage

const taskReducer = (state = initialState, action) => {
  let updatedTasks;
  
  switch (action.type) {
    case SET_TASKS:
      return action.payload;

    case ADD_TASK:
      updatedTasks = [...state, action.payload];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to localStorage
      return updatedTasks;

    case REMOVE_TASK:
      updatedTasks = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save updated tasks
      return updatedTasks;

    default:
      return state;
  }
};

export default taskReducer;
