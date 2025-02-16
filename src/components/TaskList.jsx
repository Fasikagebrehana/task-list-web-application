import React from "react";
import { useTasks } from "../context/TaskContext";
import "../styles/TaskList.css";

export default function TaskList() {
  const { tasks, toggleTask, deleteTask } = useTasks();

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
          <span>{task.text}</span>
          <div className="task-actions">
            <button
              onClick={() => toggleTask(task.id)}
              className={`complete ${task.completed ? "undo" : ""}`}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)} className="delete">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}