
import { ADD_TASK, REMOVE_TASK, SET_TASKS } from "../actions/taskActions";

// Initialize the state with tasks stored in localStorage
const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

// Reducer function to manage task-related actions
const taskReducer = (state = initialState, action) => {
  let updatedTasks;

  switch (action.type) {
    case SET_TASKS:
      // Set the state with the tasks provided in the action payload
      return action.payload;

    case ADD_TASK:
      // Add a new task to the state and update localStorage
      updatedTasks = [...state, action.payload];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save the updated list
      return updatedTasks;

    case REMOVE_TASK:
      // Remove a task by filtering out the one with the matching ID
      updatedTasks = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save the updated list
      return updatedTasks;

    default:
      // Return the current state if no matching action type is found
      return state;
  }
};


export default taskReducer;
