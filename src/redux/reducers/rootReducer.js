import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";
import weatherReducer from "./weatherReducer"; // Import weather reducer

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
  weather: weatherReducer,
});

export default rootReducer;
