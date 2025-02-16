import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import "../styles/index.css"; // Import global styles

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (username, password) => {
    if (login(username, password)) {
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <AuthForm type="login" onSubmit={handleSubmit} />
    </div>
  );
}