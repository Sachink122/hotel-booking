import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    savings: 2300,
    currency: '₹',
    rating: 5,
    text: 'I was skeptical about using another booking platform, but this saved me ₹2,300 on my Goa trip! The comparison was instant and I could see exactly why one option was cheaper.',
    trip: 'Goa Weekend Getaway'
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'San Francisco, USA',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    savings: 180,
    currency: '$',
    rating: 5,
    text: 'Found a luxury hotel in Tokyo for $180 less than what I was about to book elsewhere. The verification process gave me confidence that this wasn\'t too good to be true.',
    trip: 'Tokyo Business Trip'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    location: 'London, UK',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    savings: 95,
    currency: '£',
    rating: 5,
    text: 'The AI assistant helped me choose between 3 similar hotels and explained the pros and cons of each. Saved £95 and got a better location than I originally planned!',
    trip: 'Paris Anniversary Trip'
  },
  {
    id: 4,
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
    savings: 4500,
    currency: '₹',
    rating: 5,
    text: 'Family vacation planning was stressful until I found this platform. Compared family rooms across 6 sites and saved ₹4,500. The kids loved the hotel pool!',
    trip: 'Kerala Family Vacation'
  },
  {
    id: 5,
    name: 'Maria Rodriguez',
    location: 'Barcelona, Spain',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
    savings: 120,
    currency: '€',
    rating: 5,
    text: 'Booking my honeymoon was made so much easier. The platform showed me boutique hotels I never would have found otherwise, and saved €120 in the process.',
    trip: 'Santorini Honeymoon'
  },
  {
    id: 6,
    name: 'James Thompson',
    location: 'Sydney, Australia',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    savings: 200,
    currency: 'A$',
    rating: 4,
    text: 'Last-minute business trip to Singapore. Found availability when other sites showed "sold out" and still managed to save A$200. Impressive real-time updating.',
    trip: 'Singapore Business Trip'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Savings from Real Travelers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how much our users have saved on their recent trips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < testimonial.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600 mb-2">{testimonial.trip}</div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  Saved {testimonial.currency}{testimonial.savings.toLocaleString()}
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="text-3xl font-bold text-blue-600">₹2.1M+</div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Total Saved</div>
              <div className="text-sm text-gray-600">by our users this month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;