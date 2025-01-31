import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
//import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  //const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (response.status === 200) {  
      alert(data.message);
      navigate('/billing');
      // Redirect to BillingPage or another authenticated page
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        {/* Register Button */}
        
      <button type="submit" className="login-button">Login</button>
      <h4>Not registered ?</h4>
      
      <button type="submit" className="login-button" onClick={() => navigate("/register")}>Register</button>
      </form>
      
    </div>
  );
};

export default LoginPage;
