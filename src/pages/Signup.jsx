import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import "../styles/index.css";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (username, password) => {
    signup(username, password);
    navigate("/login"); // Redirect to login page after signup
  };

  return (
    <div className="container">
      <AuthForm type="signup" onSubmit={handleSubmit} />
    </div>
  );
}