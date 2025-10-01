import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Hero from "./component/Hero";
import CoursesSection from "./Page/CoursesSection";
import About from "./Page/About";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <CoursesSection />
        <About />
        <Routes>
         
        </Routes>
      </Router>
    </div>
  )
}
