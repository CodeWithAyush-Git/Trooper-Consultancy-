import React, { useState } from 'react';                           // Import necessary modules
import insight1 from "../photos/insight1.jpg";
import insight2 from "../photos/insight2.jpg";
import insight3 from "../photos/insight3.jpg";  
import jane from "../photos/jane.jpg";
import john from "../photos/john.jpg";
import emily from "../photos/emily.jpg";
import michael from "../photos/michael.jpg";                     // Import images


const TeamAndInsightsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);             // State to manage active accordion index

  const faqs = [
    {
      question: "What types of software do you specialize in?",
      answer: "We specialize in enterprise software, web applications, mobile apps, and cloud-based solutions across various industries."
    },
    {
      question: "How do you approach project management?",
      answer: "We use Agile methodologies with Scrum framework, ensuring iterative development and regular stakeholder feedback."
    },
    {
      question: "Can you help with legacy system modernization?",
      answer: "Yes, we have extensive experience in modernizing legacy systems with minimal disruption to business operations."
    },
    {
      question: "What is your process for IT consulting?",
      answer: "Our process includes assessment, strategy development, implementation planning, and ongoing support."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but most projects range from 3-9 months."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);                               // Toggle accordion state
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Meet Our Expert Team Section */}
     
       <section className="mb-16">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Meet Our Expert Team</h1>
        <p className="text-lg text-center  text-gray-600 mb-8">Our consultants bring deep industry knowledge and technical expertise.</p>
        
        <hr className="border-gray-200 my-8" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <img src={jane} alt="Jane Doe" className="bg-gray-200 h-40 w-full mb-4 object-cover rounded" />
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p className="text-gray-600">Chief Technology Officer</p>
          </div>
          <div className="text-center">
            <img src={john} alt="John Smith" className="bg-gray-200 h-40 w-full mb-4 object-cover rounded" />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-gray-600">Lead Project Manager</p>
          </div>
          <div className="text-center">
            <img src={emily} alt="Emily Johnson" className="bg-gray-200 h-40 w-full mb-4 object-cover rounded" />
            <h3 className="text-xl font-semibold">Emily Johnson</h3>
            <p className="text-gray-600">Senior IT Consultant</p>
          </div>
          <div className="text-center">
            <img src={michael} alt="Michael Brown" className="bg-gray-200 h-40 w-full mb-4 object-cover rounded" />
            <h3 className="text-xl font-semibold">Michael Brown</h3>
            <p className="text-gray-600">Software Architect</p>
          </div>
        </div>
      </section>
      {/* Insights Section */}

      {/* FAQ Section with Accordion */}
      <section className="mb-16">
        <hr className="border-gray-200 my-8" />
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Recent Insights Section */}
            <section>
        <hr className="border-gray-200 my-8" />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Recent Insights & Blog Posts</h1>
        <p className="text-lg text-gray-600 text-center mb-8">Stay informed with our latest thinking on technology and business strategy.</p>
        <hr className="border-gray-200 my-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img src={insight1} alt="Insight 1" className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">The Future of Cloud Computing in Enterprise</h3>
              <p className="text-gray-600 mb-4">Explore how cloud technologies are reshaping business operations and strategies in large organizations.</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Read More</a>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img src={insight2} alt="Insight 2" className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Agile Methodologies: Beyond Software Development</h3>
              <p className="text-gray-600 mb-4">Discover how Agile principles can be applied to project management in various industries.</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Read More</a>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img src={insight3} alt="Insight 3" className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Best Practices for Small Businesses</h3>
              <p className="text-gray-600 mb-4">Essential steps every small business should take to protect against digital threats.</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamAndInsightsPage;