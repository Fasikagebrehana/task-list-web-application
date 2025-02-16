import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import "../styles/index.css"; // Import global styles

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (username, password) => {
    signup(username, password);
    navigate("/");
  };

  return (
    <div className="container">
      <AuthForm type="signup" onSubmit={handleSubmit} />
    </div>
  );
}