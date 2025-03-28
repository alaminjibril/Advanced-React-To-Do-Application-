
// Action types for authentication
export const LOGIN_REQUEST = "LOGIN_REQUEST"; 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"; 
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT"; 

// Action to handle user login
export const loginUser = (username, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST }); 

  try {
    // Simulate an API request delay of 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if the provided username and password are correct
    if (username === "admin" && password === "password") {
      localStorage.setItem("auth", "true"); // Store authentication state in localStorage
      dispatch({ type: LOGIN_SUCCESS }); 
    } else {
      throw new Error("Invalid username or password"); 
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message }); 
  }
};

// Action to handle user logout
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("auth"); 
  dispatch({ type: LOGOUT }); 
};
