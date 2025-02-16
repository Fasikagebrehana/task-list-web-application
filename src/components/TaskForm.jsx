import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import "../styles/index.css";

export default function TaskForm() {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task, dueDate, priority);
      setTask("");
      setDueDate("");
      setPriority("low");
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
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="task-input"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="task-input"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="add-task-button">
        Add Task
      </button>
    </form>
  );
}