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
      <li><a href="https://www.google.com/aclk?sa=l&ai=DChcSEwiw1sLr8cWNAxVaC4MDHU3XHxcYABAAGgJzZg&co=1&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rmwRh8jOkHZb6SZJVne1Ti-wJO3rwQWmUBYW829tpxfDAcdjNwQpCxoCIkQQAvD_BwE&category=acrcp_v1_0&sig=AOD64_1UAVz_lCvXgE8cG6UmXB6UHzRBtQ&q&adurl&ved=2ahUKEwjk_7zr8cWNAxW9yqACHcSjEYYQ0Qx6BAgKEAE" className="text-gray-600 hover:text-blue-600">Software Development</a></li>
      <li><a href="https://www.google.com/aclk?sa=l&ai=DChcSEwjr9PP-8cWNAxWEpGYCHY6VL_8YABAEGgJzbQ&co=1&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rrXhrWw8agM7Yvs-w7vQphnz2GfrzbpU1m2MkglJgm_0HuDhxF0y-hoCQZUQAvD_BwE&category=acrcp_v1_0&sig=AOD64_1BUauq7WeWBY0v8Ads82-j76UZiQ&q&adurl&ved=2ahUKEwiAtu7-8cWNAxUzxzgGHeeQBiEQ0Qx6BAgNEAE" className="text-gray-600 hover:text-blue-600">Project Management</a></li>
      <li><a href="https://www.linkedin.com/company/it-services-and-it-consulting" className="text-gray-600 hover:text-blue-600">IT Consulting</a></li>
    </ul>
  </div>

  {/* About Column */}
  <div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">About</h3>
    <ul className="space-y-2">
      <li><a href="https://www.linkedin.com/company/troopersolutions/ " className="text-gray-600 hover:text-blue-600">Linkdin</a></li>
      <li><a href="https://www.teamlink.co/" className="text-gray-600 hover:text-blue-600">Team</a></li>
      <li><a href="https://valuelinksoftware.com/" className="text-gray-600 hover:text-blue-600">Values</a></li>
    </ul>
  </div>

  {/* Resources Column */}
  <div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">Resources</h3>
    <ul className="space-y-2">
      <li><a href="https://www.google.com/aclk?sa=l&ai=DChcSEwjw55Tp8sWNAxVzzRYFHXPCJkIYABAAGgJ0bA&co=1&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rmS2DYotA3lJPhoUHLreKJHBeOm2HsMW5v-rAA3jnThzdTw4cRXGPxoCXW0QAvD_BwE&category=acrcp_v1_0&sig=AOD64_2-ZFnLW4HZTkn4BEy5RNYXK94wrg&q&adurl&ved=2ahUKEwiXno_p8sWNAxU2slYBHZ5iIYgQ0Qx6BAgLEAE" className="text-gray-600 hover:text-blue-600">Blog</a></li>
      <li><a href="https://www.casestudylink.co.uk/" className="text-gray-600 hover:text-blue-600">Case Stud</a></li>
      <li><a href="https://chain.link/whitepaper" className="text-gray-600 hover:text-blue-600">Whitepapers</a></li>
    </ul>
  </div>

  {/* Contact Column */}
  <div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact</h3>
    <ul className="space-y-2">
      <li><a href="https://www.google.com/aclk?sa=l&ai=DChcSEwiy07-b88WNAxWA2RYFHRPgJRAYABABGgJ0bA&co=1&ase=2&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rn4m812Xv3xaDHEvEmCIcSR0uCgu_ssmlzJlm3WrAb4Q_k97v_7O3RoCVr4QAvD_BwE&category=acrcp_v1_5&sig=AOD64_383wDlMpaIPhUPynz9Fr6yI8yQnQ&q&nis=4&adurl&ved=2ahUKEwi9-7mb88WNAxWkrlYBHVFmKvUQ0Qx6BAgWEAE" className="text-gray-600 hover:text-blue-600">Contact Form</a></li>
      <li><a href="https://en.wikipedia.org/wiki/Link-local_address" className="text-gray-600 hover:text-blue-600">Address</a></li>
      <li><a href="https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services.html" className="text-gray-600 hover:text-blue-600">Phone</a></li>
    </ul>
  </div>
</div>
</div>
  );
};

export default FooterPage;
