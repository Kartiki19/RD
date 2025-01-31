import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
    try{
        const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
        });
        if (response.ok) {
            alert("Registration successful! Redirecting to login...");
            navigate("/"); // Redirect to login page on success
        } else {
            const errorData = await response.json();
            alert(errorData.message || "Registration failed.");
        }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
    <form className="login-form" onSubmit={handleSubmit}>
    <h2>Register</h2>
    <div className="form-group">
        <label>Username:</label>
        <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required 
        />
    </div>
    <div className="form-group">
        <label>Password:</label>
        <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
        />
    </div>
    <div className="form-group">
        <label>Confirm Password:</label>
        <input 
        type="confirmPassword" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)}
        required 
        />
    </div>
    
    <button type="submit" className="login-button">Register</button>
    
    <h4>Already registered ?</h4>
    <button type="submit" className="login-button" onClick={() => navigate("/")}>Login</button>
    </form>
    </div>
  );
};
export default RegisterPage;
