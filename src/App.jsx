import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Component/Hero';
import WhyPartner from './Component/WhyPartner';
import Services from './Component/Services';
import Testimonials from './Component/Testimonials';
import TeamAndInsightsPage from './Component/TeamAndInsightsPage';
import ServicesOfferings from './Component/ServicesOfferings';
import AboutPage from './Component/AboutPage';
import Contact from './Component/Contact';
import FooterPage from './Component/FooterPage';
import LoginPage from './Component/LoginPage';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <WhyPartner />
      <Services />
      <Testimonials />
      <TeamAndInsightsPage />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<ServicesOfferings />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;