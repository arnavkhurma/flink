import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import Mentors from "./components/mentors.js";
import Events from "./components/Events.js";
import Opportunities from "./components/Opportunities.js";
import Navigation from "./components/navbar.js";
import './App.css';



function App() {
  return (<>
  <Navigation/>
  <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/opportunities" element={<Opportunities />} />
        {/* <Route path="/profile" element={<Profile /> } /> */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    
  </>
  );
}

export default App;