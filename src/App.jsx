import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Skills from "./Page/Skill/Skill";
import Education from "./Page/Education/Education";
import Project from "./Page/Project/Project";
import Internship from "./Page/Internship/Internship";
import Services from "./Page/Service/Service";
import Contact from "./Page/Contact/Contact";
import Paper from "./Page/Paperpublish/Paperpublish";
import Gallery from "./Page/Gallery/Gallery";



const App = () => {
  return (
    <>
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/internships" element={<Internship />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Paper" element={<Paper />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
