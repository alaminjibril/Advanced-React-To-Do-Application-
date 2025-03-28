import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/authActions";

const Login = () => {
  // State hooks to manage username and password inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Initialize the dispatch function to trigger actions
  const dispatch = useDispatch();

  // Extract loading and error states from Redux store
  const { loading, error } = useSelector((state) => state.auth);

  // Function to handle login when the button is clicked
  const handleLogin = () => {
    if (!username || !password) return;
    
    // Dispatch the login action with username and password
    dispatch(loginUser(username, password));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow-lg p-4 border-0 w-100"
        style={{ maxWidth: "400px" }} // Ensure a responsive card width
      >
        <h3 className="text-center text-primary mb-3">🔐 Login</h3>

        {error && <p className="alert alert-danger">{error}</p>}
        
        <div className="mb-3">
          <label className="form-label fw-bold">Username</label>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update state on change
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
        </div>

        <button
          className="btn btn-primary w-100 py-2"
          onClick={handleLogin}
          disabled={loading} // Disable button while loading
        >
          {loading ? "🔄 Logging in..." : "🚀 Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
