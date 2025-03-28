// src/redux/actions/taskActions.js
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const SET_TASKS = "SET_TASKS";

export const loadTasks = () => (dispatch) => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  dispatch({ type: SET_TASKS, payload: savedTasks });
};

export const addTask = (task) => (dispatch, getState) => {
  dispatch({ type: ADD_TASK, payload: task });
  const updatedTasks = [...getState().tasks, task];
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

export const removeTask = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_TASK, payload: id });
  const updatedTasks = getState().tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};
