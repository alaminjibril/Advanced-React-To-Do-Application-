// src/redux/reducers/authReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/authActions";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("auth")) || false, // Load auth status
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      localStorage.setItem("auth", JSON.stringify(true)); // Store auth status
      return { ...state, isAuthenticated: true, loading: false };

    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      localStorage.removeItem("auth"); // Remove auth status
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
};

export default authReducer;
