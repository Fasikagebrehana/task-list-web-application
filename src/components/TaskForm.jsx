import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import "../styles/index.css"; // Import global styles

export default function TaskForm() {
  const [task, setTask] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-task-button">
        Add Task
      </button>
    </form>
  );
}