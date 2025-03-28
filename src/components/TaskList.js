// Import necessary dependencies
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/actions/taskActions";

const TaskList = () => {
  // Retrieve tasks from Redux store
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Function to determine badge color based on task priority
  const getBadgeColor = (priority) => {
    switch (priority) {
      case "High":
        return "danger"; // Red badge for high-priority tasks
      case "Medium":
        return "warning"; // Yellow badge for medium-priority tasks
      case "Low":
        return "success"; // Green badge for low-priority tasks
      default:
        return "secondary"; // Default gray badge
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0 p-4">
        <h4 className="text-center mb-3 text-primary">📋 Task List</h4>

        {/* Display a message if no tasks are available */}
        {tasks.length === 0 ? (
          <p className="text-muted text-center">No tasks added yet.</p>
        ) : (
          <ul className="list-group">
            {/* Loop through tasks and display each one */}
            {tasks.map((task) => (
              <li
                key={task.id}
                className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"
              >
                {/* Task text with truncation to prevent overflow */}
                <span className="fw-bold text-truncate">{task.text}</span>

                <span className={`badge bg-${getBadgeColor(task.priority)} px-3 py-2`}>
                  {task.priority}
                </span>

                {/* Weather Information (Only if available) */}
                {task.weather && (
                  <div className="d-flex align-items-center gap-2">
                    <img src={task.weather.icon} alt="Weather" width="30" height="30" />
                    <span>{task.weather.temperature}°C</span>
                  </div>
                )}

                {/* Button to remove task from the list */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(removeTask(task.id))}
                >
                  🗑 Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;

