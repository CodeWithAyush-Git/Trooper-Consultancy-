import React, { useState } from 'react';
const FooterPage = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  // Function to handle email subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setSubscriptionMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setSubscriptionMessage(''), 3000);
    }
  };
  // Function to handle form submission
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Newsletter Section */}
      <section className="mb-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Trooper Consultancy Services</h1>
        <p className="text-lg text-gray-600 mb-8">Stay up to date with our latest insights</p>
        
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </div>
          {subscriptionMessage && (
            <p className="mt-2 text-green-600">{subscriptionMessage}</p>
          )}
        </form>
        
        <hr className="border-gray-200 my-8" />
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  {/* Services Column */}
  <div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">Services</h3>
    <ul className="space-y-2">
      <li><a href="https://dummy-service1.example.com/software-dev" className="text-gray-600 hover:text-blue-600">Software Development</a></li>
      <li><a href="https://dummy-service1.example.com/project-mgmt" className="text-gray-600 hover:text-blue-600">Project Management</a></li>
      <li><a href="https://dummy-service1.example.com/it-consulting" className="text-gray-600 hover:text-blue-600">IT Consulting</a></li>
    </ul>
  </div>

  {/* About Column */}
  <div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">About</h3>
    <ul className="space-y-2">
      <li><a href="https://dummy-about.example.com/company" className="text-gray-600 hover:text-blue-600">Company</a></li>
      <li><a href="https://dummy-about.example.com/team" className="text-gray-600 hover:text-blue-600">Team</a></li>
      <li><a href="https://dummy-about.example.com/values" className="text-gray-600 hover:text-blue-600">Values</a></li>
    </ul>
  </div>

  {/* Resources Column */}
  <div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">Resources</h3>
    <ul className="space-y-2">
      <li><a href="https://dummy-blog.example.com" className="text-gray-600 hover:text-blue-600">Blog</a></li>
      <li><a href="https://dummy-resources.example.com/case-studies" className="text-gray-600 hover:text-blue-600">Case Studies</a></li>
      <li><a href="https://dummy-resources.example.com/whitepapers" className="text-gray-600 hover:text-blue-600">Whitepapers</a></li>
    </ul>
  </div>

  {/* Contact Column */}
  <div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact</h3>
    <ul className="space-y-2">
      <li><a href="https://dummy-contact.example.com/form" className="text-gray-600 hover:text-blue-600">Contact Form</a></li>
      <li><a href="https://dummy-contact.example.com/location" className="text-gray-600 hover:text-blue-600">Address</a></li>
      <li><a href="https://dummy-contact.example.com/phone" className="text-gray-600 hover:text-blue-600">Phone</a></li>
    </ul>
  </div>
</div>
</div>
  );
};

export default FooterPage;
