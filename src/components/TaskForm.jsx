import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import "../styles/index.css";

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
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          fontSize: "16px",
        }}
      />
      <button
        type="submit"
        style={{
          marginTop: "10px",
          padding: "10px",
          width: "100%",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </form>
  );
}