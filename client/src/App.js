import React from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import NotHost from "./components/NotHost";

import { Route, Routes } from "react-router-dom";


function App() {
  return (
  <>
    <Routes> 
      <Route path="/" element={<Home />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/host"  element={<NotHost />} />
    </Routes>
    </>
 )
  
}

export default App;
