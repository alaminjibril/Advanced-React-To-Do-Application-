// src/redux/actions/authActions.js
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginUser = (username, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    // Simulating authentication (Replace this with an API call if needed)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (username === "admin" && password === "password") {
      localStorage.setItem("auth", "true");
      dispatch({ type: LOGIN_SUCCESS });
    } else {
      throw new Error("Invalid username or password");
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("auth");
  dispatch({ type: LOGOUT });
};
