import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/Navbar/Nav"

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboad/Dashboad"
import Course from "./components/Course/Course";
import AdminDash from "./components/AdminDash/AdminDash";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import AddCourse from "./components/AddCourse/AddCourse";
import Grades from "./components/Grade/Grade";

// import { auth } from "./firebase";
import { auth } from "./firebase.js";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/Course" element={<Course />} />
          <Route path="/AdminDash" element={<AdminDash />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AddCourse" element={<AddCourse />} />
          <Route path="/Grades" element={<Grades />} />
          <Route path="/" element={<Home name={userName} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
