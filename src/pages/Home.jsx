import React from "react";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterButtons from "../components/FilterButtons";
import "../styles/index.css";

export default function Home({ darkMode }) {
  const { user } = useAuth();
  const { tasks, setFilter } = useTasks(); // Destructure setFilter here

  if (!user) {
    return <div className="container">Please log in to view tasks.</div>;
  }

  return (
    <div className="container">
      <h1>Welcome, {user.username}!</h1>
      <TaskForm />
      <FilterButtons setFilter={setFilter} /> {/* Pass setFilter here */}
      <div className={darkMode ? "task-list-dark" : "task-list-light"}>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}