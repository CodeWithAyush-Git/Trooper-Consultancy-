import React from 'react';
import aboutImg from "../photos/About.jpg"; // Importing the image for the About section
import excellenceImg from "../photos/excellence.jpg";
import Logo2 from "../photos/Logo2.png";
import collaborationImg from "../photos/collaboration.jpg";
import clientFocusImg from "../photos/clientfocus.png";
import innovationImg from "../photos/innovation.jpg";
import adaptabilityImg from "../photos/adaptability.jpg";  

const AboutPage = () => {         // AboutPage component
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Trooper Consultancy Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about our journey, our principles, and the dedicated team driving innovation.
        </p>
      </section>

      {/* Our Journey Section */}                         {/* header photos are here if you cange       */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img src={aboutImg} alt="About Trooper Consultancy" className="h-64 w-full object-cover rounded-lg mb-6 lg:mb-0" />
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Trooper Consultancy Services began with a vision to bridge the gap between innovative software solutions and business needs. Our founders, veterans in the tech industry, aimed to create a consultancy focused on delivering tangible results through tailored software development and strategic IT guidance.
            </p>
            <p className="text-gray-600">
              Over the years, we've grown our team and expanded our service offerings, adapting to the ever-evolving technology landscape. We've partnered with businesses of all sizes, helping them navigate digital transformation, optimize processes, and build robust, scalable software applications. Our commitment to excellence and client success remains the cornerstone of our operation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>                                  {/*  all are card here if change the photos       */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Excellence */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src={excellenceImg} alt="Excellence" className="h-12 w-12 rounded-full mb-4 object-cover items-center mx-auto" />
            <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">Excellence</h3>
            <p className="text-gray-600">We strive for exceptional quality in everything we do, from code to client communication.</p>
          </div>
          
          {/* Integrity */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            
            <img src={Logo2} alt="Integrity" className="h-12 w-12 rounded-full items-center mb-4 object-cover mx-auto" />
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Integrity</h3>
            <p className="text-gray-600">We operate with honesty and transparency, building trust through reliable advice and delivery.</p>
          </div>
          
          {/* Collaboration */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <img src={collaborationImg} alt="Collaboration" className="h-12 w-12 rounded-full items-center mb-4 object-cover mx-auto" />
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Collaboration</h3>
            <p className="text-gray-600">We believe the best solutions are built together, fostering open communication with clients and within our team.</p>
          </div>
          
          {/* Client Focus */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src={clientFocusImg} alt="Client Focus" className="h-12 w-12 rounded-full items-center  mb-4 object-cover mx-auto" />
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Client Focus</h3>
            <p className="text-gray-600">Our clients' success is our priority. We tailor our services to meet their unique challenges and goals.</p>
          </div>
          
          {/* Innovation */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                   <img src={innovationImg} alt="Innovation" className="h-12 w-12 rounded-full items-center mb-4 object-cover mx-auto" />
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">We embrace new technologies and creative approaches to solve complex problems effectively.</p>
          </div>
          
          {/* Adaptability */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img src={adaptabilityImg} alt="Adaptability" className="h-12 w-12 rounded-full mb-4 items-center object-cover mx-auto" />
         <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Adaptability</h3>
         <p className="text-gray-600">The tech world changes rapidly. We remain flexible and responsive to meet evolving client needs and market demands.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;