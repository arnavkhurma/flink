import React from "react";
import "./home.css";
import Login from "./login"; // Import the Login component

const Home = () => {
  return (
    <div className="page">
      <div className="backgroundImage"></div>
      <div className="textContainer">
        <h1 className="text">Enable. Encourage.<br/>Empower.</h1>
      </div>
      <div className="login-form-div">
      <Login />
      </div>
      
    </div>
    
  );
};

export default Home;
