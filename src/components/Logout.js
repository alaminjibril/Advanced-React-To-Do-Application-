import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handles user logout
  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatches logout action to Redux store
    navigate("/login"); // Redirects user to the login page after logout
  };

  return (
    // Logout button that triggers the handleLogout function
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default Logout;
