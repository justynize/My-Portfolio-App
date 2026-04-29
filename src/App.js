import React from "react";
import "./index.css";
import Home from "./route/Home";
import About from "./route/About";
import Project from "./route/Project";
import Contact from "./route/Contact";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> 
  );
}

export default App;
