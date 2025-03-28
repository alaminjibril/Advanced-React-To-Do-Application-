// Import action types related to authentication
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/authActions";

// Define the initial state for authentication
const initialState = {
  // Load authentication status from localStorage
  isAuthenticated: JSON.parse(localStorage.getItem("auth")) || false,
  // Tracks the login request state
  loading: false, 
  error: null, 
};

// Reducer function to handle authentication-related actions
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      // When login is initiated, set loading to true and clear previous errors
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      // On successful login, store authentication status in localStorage
      localStorage.setItem("auth", JSON.stringify(true));
      return { ...state, isAuthenticated: true, loading: false };

    case LOGIN_FAILURE:
      // If login fails, store the error message and stop loading
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      // On logout, remove authentication status from localStorage
      localStorage.removeItem("auth");
      return { ...state, isAuthenticated: false };

    default:
      // Return the current state for any unknown actions
      return state;
  }
};

export default authReducer;
