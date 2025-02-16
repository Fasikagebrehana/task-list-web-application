import React from "react";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterButtons from "../components/FilterButtons";
import "../styles/index.css";

export default function Home() {
  const { user } = useAuth(); // No need for logout here
  const { tasks, setFilter } = useTasks();

  if (!user) {
    return <div className="container">Please log in to view tasks.</div>;
  }

  return (
    <div className="container">
      <h1>Welcome, {user.username}!</h1> {/* Keep the welcome message */}
      <TaskForm />
      <FilterButtons setFilter={setFilter} />
      <TaskList tasks={tasks} />
    </div>
  );
}