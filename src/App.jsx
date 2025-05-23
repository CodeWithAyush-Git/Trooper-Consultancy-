import Hero from './Component/Hero';
import WhyPartner from './Component/WhyPartner';
import Services from './Component/Services';
import './App.css';
import React from 'react';
import Testimonials from './Component/Testimonials';
import TeamAndInsightsPage from './Component/TeamAndInsightsPage';
import FooterPage from './Component/FooterPage';
import ServicesOfferings from './Component/ServicesOfferings';
import AboutPage from './Component/AboutPage';
import Contact from './Component/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Hero />
      <WhyPartner />
      <Services />
     <Testimonials />
   <TeamAndInsightsPage/>
   <ServicesOfferings/>
   <AboutPage/>
    <Contact/>
     <FooterPage/>
       </div>
  );
}

export default App;
