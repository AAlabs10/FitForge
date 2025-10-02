import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Hero from "./component/Hero";
import CoursesSection from "./Page/CoursesSection";
import About from "./Page/About";
import Time from "./Page/TIme";
import Location from "./Page/Location";
import Footer from "./Page/Footer";
import Pricing from "./Page/Pricing";
import Class from "./Page/Class";
import Team from "./Page/Team";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <CoursesSection />
        <About />
        <Time />
        <Team />
        <Class />
        <Pricing />
        <Location />
        <Footer />
        <Routes>
         
        </Routes>
      </Router>
    </div>
  )
}
