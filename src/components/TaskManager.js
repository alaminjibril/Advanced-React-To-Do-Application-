import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TaskManager = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Task Manager</h2>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default TaskManager;
