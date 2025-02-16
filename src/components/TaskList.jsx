import React from "react";
import { useTasks } from "../context/TaskContext";
import "../styles/TaskList.css";

export default function TaskList() {
  const { tasks, toggleTask, deleteTask } = useTasks();

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          {/* Task Content */}
          <div className="task-content">
            <span>{task.text}</span>
            <div className="task-details">
              {task.dueDate && <span>Due: {task.dueDate}</span>}
              {task.priority && <span>Priority: {task.priority}</span>}
            </div>
          </div>

          {/* Task Actions */}
          <div className="task-actions">
            <button
              onClick={() => toggleTask(task.id)}
              className={`complete ${task.completed ? "undo" : ""}`}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}