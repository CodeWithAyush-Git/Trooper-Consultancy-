export default function Services() {
  const services = [
    {
      title: "Software Development",
      description: "Building custom software solutions tailored to your unique business needs.",
      cta: "Learn More"
    },
    {
      title: "Project Management",
      description: "Expert guidance to ensure your projects are delivered on time and within budget.",
      cta: "Learn More"
    },
    {
      title: "IT Consulting",
      description: "Strategic advice to optimize your IT infrastructure and leverage technology effectively.",
      cta: "Learn More"
    }
  ];

  return (
    <section className="services-section bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Our Core Consultancy Services</h2>
        <p className="text-center text-lg mb-12">From strategy to implementation, we provide comprehensive solutions.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
                {service.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}