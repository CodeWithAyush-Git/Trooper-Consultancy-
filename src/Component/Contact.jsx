import React, { useState } from 'react';
import contactImg from "../photos/Contact.jpg"; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch with Trooper Consultancy</h1>
        <p className="text-xl text-gray-600">We're here to answer your questions and discuss how we can help your business.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
          <p className="text-gray-600 mb-8">Fill out the form below to get in touch with our team.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ...form fields... */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Question or Feedback</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter question or feedback"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Contact Information Section */}
        <section className="bg-gray-50 p-8 rounded-lg">
          {/* Yahan image lagayi gayi hai */}
          <img
            src={contactImg}
            alt="Contact"
            className="h-64 w-full object-cover rounded-lg mb-8"
          />
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
          <div className="space-y-5">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-gray-500 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-600 text-lg">123 Software Lane, Tech City, TC 98765</p>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-gray-500 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-600 text-lg">contact@trooperconsultancy.com</p>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-gray-500 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="text-gray-600 text-lg">(123) 456-7890</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;