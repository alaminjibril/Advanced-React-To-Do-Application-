import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout"; // Import the Logout component

const Navbar = () => {
  // Get authentication status from Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          To-Do App
        </Link>

        {/* Conditionally render Login or Logout button based on authentication status */}
        <div className="ml-auto">
          {isAuthenticated ? (
            <Logout /> // Show Logout button if user is authenticated
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link> 
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
