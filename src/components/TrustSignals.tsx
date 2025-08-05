import React from 'react';

const partners = [
  { name: 'Booking.com', logo: 'https://logos-world.net/wp-content/uploads/2021/08/Booking-Logo.png' },
  { name: 'Expedia', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Expedia-Logo.png' },
  { name: 'Hotels.com', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Hotels-com-Logo.png' },
  { name: 'Agoda', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Agoda-Logo.png' },
  { name: 'Airbnb', logo: 'https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo.png' },
  { name: 'Trivago', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Trivago-Logo.png' }
];

const TrustSignals: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Trusted by millions, powered by the best
          </h3>
          <p className="text-gray-500">
            We compare prices from these top booking platforms and more
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <div className="text-center">
                <div className="w-20 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xs font-semibold text-gray-600 px-2">
                    {partner.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Booking Partners</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">2M+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Price Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;