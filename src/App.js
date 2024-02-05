import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './Components/Navbar.js';
import { Route, Routes } from "react-router-dom";
import Projects from "./routes/Projects.js";
import About from "./routes/About.js";
import Contact from "./routes/Contact.js";
import Resume from "./routes/HighLights.js";
import Skills from "./routes/Skills.js";
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About Name={"About Me"} />} /> 
        <Route path="/skills" element={<Skills Name={"Skills"} />} />
        <Route path="/HighLights" element={<Resume Name={"HighLights"} />} />
        <Route path="/projects" element={<Projects Name={"Projects"}/>} />
        <Route path="/contact" element={<Contact Name={"Contact"}/>} />
      </Routes>
      <Navbar/>
    </div>
  );
}

export default App;
