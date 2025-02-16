import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { user } = useAuth(); // Get the logged-in user
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load tasks for the current user
  useEffect(() => {
    if (user) {
      const userTasks = JSON.parse(localStorage.getItem(`tasks_${user.username}`)) || [];
      setTasks(userTasks);
    }
  }, [user]);

  // Add a new task
  const addTask = (task) => {
    if (user) {
      const newTasks = [...tasks, { id: Date.now(), text: task, completed: false }];
      setTasks(newTasks);
      localStorage.setItem(`tasks_${user.username}`, JSON.stringify(newTasks));
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    if (user) {
      const newTasks = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      setTasks(newTasks);
      localStorage.setItem(`tasks_${user.username}`, JSON.stringify(newTasks));
    }
  };

  // Delete a task
  const deleteTask = (id) => {
    if (user) {
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
      localStorage.setItem(`tasks_${user.username}`, JSON.stringify(newTasks));
    }
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <TaskContext.Provider
      value={{ tasks: filteredTasks, addTask, toggleTask, deleteTask, setFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);