import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/actions/taskActions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const getBadgeColor = (priority) => {
    switch (priority) {
      case "High":
        return "danger";
      case "Medium":
        return "warning";
      case "Low":
        return "success";
      default:
        return "secondary";
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0 p-4">
        <h4 className="text-center mb-3 text-primary">📋 Task List</h4>

        {tasks.length === 0 ? (
          <p className="text-muted text-center">No tasks added yet.</p>
        ) : (
          <ul className="list-group">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"
              >
                <span className="fw-bold text-truncate">{task.text}</span>

                <span className={`badge bg-${getBadgeColor(task.priority)} px-3 py-2`}>
                  {task.priority}
                </span>

                {/* Weather Information (Only if available) */}
                {task.weather && (
                  <div className="d-flex align-items-center gap-2">
                    <img src={task.weather.icon} alt="Weather" width="30" height="30" />
                    <span>
                      {task.weather.temperature}°C
                    </span>
                  </div>
                )}

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(removeTask(task.id))}
                >
                   Delete
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
