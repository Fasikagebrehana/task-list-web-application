import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Task List App
      </Link>
      <div>
        {user ? (
          <>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}