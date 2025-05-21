export default function WhyPartner() {
  return (
    <section className="why-partner py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Trooper Consultancy?</h2>
      <p className="text-center text-lg mb-12">Experience the difference our expertise and commitment can make for your business.</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="feature-card p-6 border rounded-lg flex items-center justify-center">
          <img src="/logo.png" alt="Logo" className="w-16 h-16" />
        </div>
        <div className="feature-card p-6 border rounded-lg flex items-center justify-center">
          <img src="/Logo2.png" alt="Logo" className="w-16 h-16" />
        </div>
        <div className="feature-card p-6 border rounded-lg flex items-center justify-center">
          <img src="/Logo3.png" alt="Logo" className="w-16 h-16" />
        </div>
        <div className="feature-card p-6 border rounded-lg flex items-center justify-center">
          <img src="/Logo4.png" alt="Logo" className="w-16 h-16" />
        </div>
      </div>
    </section>
  );
}