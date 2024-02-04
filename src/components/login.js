import React, { useState } from 'react';
import './login.css';

const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add your login logic here

      // Redirect to opportunities page after successful login
      window.location.href = 'http://localhost:3000/opportunities';

      // Clear the form fields after successful login
      setFormData({
        username: '',
        password: '',
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle login errors
    }
  };

  return (
    <div>
      <form id="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" className='signup-button'>Login</button>
        <p className='written'> Don't have an account? <a href='/signup'> Sign up!</a></p>
      </form>
    </div>
  );
};

export default Login;
