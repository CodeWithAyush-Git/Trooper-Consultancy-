// Trooper Consultancy Contact Page Component
import logo1 from "../photos/Logo.png";
import logo2 from "../photos/Logo2.png";
import logo3 from "../photos/Logo3.png";
import logo4 from "../photos/Logo4.png";

export default function WhyPartner() {
  return (
    <section className="why-partner py-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="feature-card flex flex-col items-center p-6 border rounded-lg">
          <img src={logo1} alt="Expertise" className="h-20 w-20 object-contain mb-4" />
          <h3 className="font-bold text-xl text-center">Expertise</h3>
        </div>
        <div className="feature-card flex flex-col items-center p-6 border rounded-lg">
          <img src={logo2} alt="Integrity" className="h-20 w-20 object-contain mb-4" />
          <h3 className="font-bold text-xl text-center">Integrity</h3>
        </div>
        <div className="feature-card flex flex-col items-center p-6 border rounded-lg">
          <img src={logo3} alt="Collaboration" className="h-20 w-20 object-contain mb-4" />
          <h3 className="font-bold text-xl text-center">Collaboration</h3>
        </div>
        <div className="feature-card flex flex-col items-center p-6 border rounded-lg">
          <img src={logo4} alt="Innovation" className="h-20 w-20 object-contain mb-4" />
          <h3 className="font-bold text-xl text-center">Innovation</h3>
        </div>
      </div>
    </section>
  );
}
