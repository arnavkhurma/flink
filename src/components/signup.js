import './signup.css'; // Import your custom CSS file
import './home.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const initialFormData = {
    username: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

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
      const response = await fetch('http://localhost:8086/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User successfully created');
        // Clear input fields after successful registration
        setFormData(initialFormData);
        // You can redirect or perform other actions after successful registration
        // history.push('/home');
        navigate('/home');
      } else {
        const errorData = await response.json();
        console.error('Failed to create user:', errorData.message);
        // Display user-friendly error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle unexpected errors
    }
  };

  return (
    <div className="page2">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Make an account to get started!</p>
          <input
            type="username"
            name="username"
            value={formData.username}
            placeholder="Username"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="E-mail"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
