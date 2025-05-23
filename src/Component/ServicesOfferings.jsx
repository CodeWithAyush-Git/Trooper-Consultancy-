import React from 'react';
import { Link } from 'react-router-dom';
import s1 from "../photos/s1.jpg";
import s2 from "../photos/s2.jpg";
import s3 from "../photos/s3.jpg";
import s4 from "../photos/s4.jpg";
import s5 from "../photos/s5.jpg";
import s6 from "../photos/s6.jpg";
import s7 from "../photos/s7.jpg";
import s8 from "../photos/s8.jpg";
import s9 from "../photos/s9.jpg";
import s10 from "../photos/s10.jpg";
import s11 from "../photos/s11.jpg";
import s12 from "../photos/s12.jpg";

const serviceImages = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12];
const ServicesOfferings = () => {
  const services = [
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, built with modern technologies and agile methodologies.",
      cta: "Explore Development"
    },
    {
      title: "Project Management",
      description: "Expert guidance to ensure your projects are delivered on time, within budget, and meet all requirements, using industry best practices.",
      cta: "Discover Management"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT advice to optimize your infrastructure, enhance efficiency, and drive innovation, aligned with your business goals.",
      cta: "Get IT Insights"
    },
    {
      title: "Cloud Solutions",
      description: "Design, migration, and management of secure, scalable cloud environments (AWS, Azure, GCP) to support your applications and data.",
      cta: "Learn Cloud Services"
    },
    {
      title: "Data Analytics",
      description: "Unlock powerful insights from your data through advanced analytics, visualization, and reporting to make informed business decisions.",
      cta: "Analyze Your Data"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security audits, penetration testing, and implementation of robust measures to protect your digital assets from threats.",
      cta: "Secure Your Business"
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive, engaging, and user-centric interfaces that enhance usability and drive customer satisfaction.",
      cta: "Explore Design"
    },
    {
      title: "Mobile Development",
      description: "Building high-performance, native, and cross-platform mobile applications for iOS and Android devices.",
      cta: "Develop Mobile Apps"
    },
    {
      title: "DevOps Implementation",
      description: "Implementing DevOps practices to streamline development cycles, improve collaboration, and achieve continuous delivery.",
      cta: "Implement DevOps"
    },
    {
      title: "Quality Assurance",
      description: "Ensuring the reliability, functionality, and quality of your software through rigorous testing processes.",
      cta: "Ensure Quality"
    },
    {
      title: "Legacy System Modernization",
      description: "Transforming outdated legacy systems into modern, efficient, and scalable platforms.",
      cta: "Modernize Systems"
    },
    {
      title: "API Development & Integration",
      description: "Designing and building robust APIs to connect your systems and data seamlessly.",
      cta: "Integrate Systems"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
     <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Software Consultancy Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From initial concept and strategic planning to cutting-edge development and continuous support, 
          Trooper Consultancy provides end-to-end solutions that empower your digital journey and drive 
          tangible business outcomes.
        </p>
      </section>

      {/* Our Offerings Section */}
      <section>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Offerings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={serviceImages[index]} alt={service.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href="#"     // Replace with actual link 
                  className="text-blue-600 font-medium hover:text-blue-800 hover:underline inline-flex items-center"
                >
                 {service.cta}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesOfferings;