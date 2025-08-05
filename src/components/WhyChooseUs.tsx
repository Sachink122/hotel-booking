import React from 'react';
import { Clock, Shield, Search, Star } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Lightning Fast Comparison',
    description: 'Compare prices from 50+ booking sites in under 3 seconds. No more tab-switching or endless searching.',
    stat: '3 sec',
    statLabel: 'Average search time'
  },
  {
    icon: Shield,
    title: 'Completely Unbiased Results',
    description: 'We show you all options without hidden fees or sponsored rankings. Pure transparency, every time.',
    stat: '100%',
    statLabel: 'Transparent results'
  },
  {
    icon: Search,
    title: 'Verified Hotel Stays',
    description: 'Every hotel is verified with real guest reviews and authentic photos. No fake listings, ever.',
    stat: '2M+',
    statLabel: 'Verified reviews'
  },
  {
    icon: Star,
    title: 'Best Price Guarantee',
    description: 'Find a lower price elsewhere? We\'ll match it and give you an extra 5% off your next booking.',
    stat: '24/7',
    statLabel: 'Price monitoring'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why 2M+ Travelers Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've revolutionized hotel booking by putting transparency and savings first. 
            Here's what makes us different from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {feature.statLabel}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Save on Your Next Trip?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join millions of smart travelers who save an average of $127 per booking with our platform.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg">
              Start Comparing Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;