import { useState } from 'react';
import heroImg from "../photos/hero.jpg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleExploreServices = () => {
    navigate('/services');
  };

  return (
    <div>
      {/* Header Section */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Trooper Consultancy Services</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <a href="#cases" className="text-gray-700 hover:text-blue-600 font-medium">Case Studies</a>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="text-gray-700 hover:text-blue-600">Menu</span>
          </button>
        </div>

        {/* Mobile Navigation (Sliding Menu) */}
        <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div 
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex justify-end p-4">
              <button 
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-4 p-6">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/services"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <a 
                href="#cases"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={toggleMenu}
              >
                Case Studies
              </a>
              <Link 
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with background image and overlay content */}
      <section className="relative h-[450px] md:h-[600px] bg-gray-900 flex items-center justify-center">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Empowering Businesses Through Technology"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start justify-center h-full text-center md:text-left px-4 md:pl-16 w-full max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Empowering Businesses
            <span className="block text-blue-200">Through Technology</span>
          </h1>
          <p className="text-lg md:text-2xl text-white mb-6 drop-shadow">
            Driving innovation and efficiency with expert software consultancy.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg"
            onClick={handleExploreServices}
          >
            Explore Our Services
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header;
