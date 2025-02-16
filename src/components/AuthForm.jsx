import React, { useState } from "react";
import "../styles/AuthForm.css";

export default function AuthForm({ type, onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>{type === "login" ? "Login" : "Signup"}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="auth-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="auth-input"
      />
      <button type="submit" className="auth-button">
        {type === "login" ? "Login" : "Signup"}
      </button>
    </form>
  );
}