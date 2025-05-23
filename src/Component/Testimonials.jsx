import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Trooper Consultancy provided invaluable insights that transformed our software development process. Highly recommended!",
      name: "Sarah Chen",
      position: "CTO, Tech Innovators Inc."
    },
    {
      id: 2,
      quote: "Their project management expertise was crucial to the successful launch of our complex product.",
      name: "David Kim",
      position: "Project Lead, Global Solutions"
    },
    {
      id: 3,
      quote: "We saw significant improvements in our IT efficiency after consulting with the Trooper team.",
      name: "Maria Garcia",
      position: "Operations Manager, Future Forward Ltd."
    },
    {
      id: 4,
      quote: "Their strategic advice on software architecture was exactly what we needed to scale.",
      name: "James Miller",
      position: "Lead Architect, CodeCrafters"
    },
    {
      id: 5,
      quote: "The team's collaborative approach made the entire development process smooth and effective.",
      name: "Emily Davis",
      position: "Product Owner, Agile Enterprises"
    },
    {
      id: 6,
      quote: "Exceptional IT consulting. They helped us cut costs and boost performance.",
      name: "Omar Hassan",
      position: "IT Director, DataStream"
    },
    {
      id: 7,
      quote: "Trooper Consultancy's project managers are top-notch. They kept everything on track.",
      name: "Arya Sharma",
      position: "Program Manager, Innovate Solutions"
    },
    {
      id: 8,
      quote: "Their custom software development significantly improved our workflow efficiency.",
      name: "Carlos Rodriguez",
      position: "CEO, BizFlow Technologies"
    },
    {
      id: 9,
      quote: "Responsive, knowledgeable, and a pleasure to work with. Highly recommend for any IT challenge.",
      name: "Sophie Dubois",
      position: "Founder, Lumiera Consulting"
    },
    {
      id: 10,
      quote: "The best in the business for software strategy. They truly understand our needs.",
      name: "Kenji Tanaka",
      position: "Lead Strategist, Nexus Innovations"
    }
  ];

  return (
    <div className="bg-blue-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* 5-star rating */}
              <div className="flex mb-3 space-x-15">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="mb-4">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;