import React from 'react';
import { Star, MapPin, Wifi, Car, Coffee, Users } from 'lucide-react';

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
  prices: {
    platform: string;
    price: number;
    originalPrice?: number;
  }[];
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Grand Palace Hotel',
    location: 'Manhattan, New York',
    rating: 4.8,
    reviews: 2456,
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Spa'],
    prices: [
      { platform: 'Booking.com', price: 299, originalPrice: 349 },
      { platform: 'Expedia', price: 315 },
      { platform: 'Hotels.com', price: 328 },
      { platform: 'Agoda', price: 305, originalPrice: 340 }
    ]
  },
  {
    id: 2,
    name: 'Urban Boutique Inn',
    location: 'SoHo, New York',
    rating: 4.6,
    reviews: 1834,
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['Free WiFi', 'Gym', 'Business Center'],
    prices: [
      { platform: 'Booking.com', price: 189 },
      { platform: 'Expedia', price: 195, originalPrice: 225 },
      { platform: 'Hotels.com', price: 202 },
      { platform: 'Airbnb', price: 176 }
    ]
  },
  {
    id: 3,
    name: 'Riverside Resort',
    location: 'Financial District, New York',
    rating: 4.4,
    reviews: 912,
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Room Service'],
    prices: [
      { platform: 'Booking.com', price: 245 },
      { platform: 'Expedia', price: 259 },
      { platform: 'Hotels.com', price: 238, originalPrice: 280 },
      { platform: 'Agoda', price: 252 }
    ]
  }
];

const HotelComparison: React.FC = () => {
  const handleBookDeal = (hotel: Hotel, bestDeal: Hotel['prices'][0]) => {
    // In a real app, this would redirect to the booking platform
    alert(`Redirecting to ${bestDeal.platform} to book ${hotel.name} for $${bestDeal.price}/night`);
  };

  const handleViewDetails = (hotel: Hotel) => {
    // In a real app, this would show a detailed modal or navigate to hotel details page
    alert(`Viewing details for ${hotel.name}\n\nLocation: ${hotel.location}\nRating: ${hotel.rating}/5 (${hotel.reviews} reviews)\nAmenities: ${hotel.amenities.join(', ')}`);
  };

  const getLowestPrice = (prices: Hotel['prices']) => {
    return Math.min(...prices.map(p => p.price));
  };

  const getBestDeal = (prices: Hotel['prices']) => {
    return prices.reduce((best, current) => 
      current.price < best.price ? current : best
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compare & Save on Every Stay
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See real-time prices from top booking sites and choose the best deal for you
          </p>
        </div>

        <div className="space-y-8">
          {hotels.map((hotel) => {
            const bestDeal = getBestDeal(hotel.prices);
            const lowestPrice = getLowestPrice(hotel.prices);
            
            return (
              <div key={hotel.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{hotel.name}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{hotel.location}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="ml-2 text-sm font-medium">{hotel.rating}</span>
                          </div>
                          <span className="text-sm text-gray-600">({hotel.reviews} reviews)</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {hotel.amenities.map((amenity, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          ${lowestPrice}
                        </div>
                        <div className="text-sm text-gray-600">per night</div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="text-lg font-semibold mb-3">Compare Prices:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {hotel.prices.map((price, index) => (
                          <div 
                            key={index} 
                            onClick={() => handleBookDeal(hotel, price)}
                            className={`p-3 rounded-lg border-2 transition-all duration-200 cursor-pointer hover:shadow-md transform hover:-translate-y-1 ${
                              price.price === lowestPrice 
                                ? 'border-green-500 bg-green-50' 
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                          >
                            <div className="text-sm font-medium text-gray-700 mb-1">
                              {price.platform}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-gray-900">
                                ${price.price}
                              </span>
                              {price.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  ${price.originalPrice}
                                </span>
                              )}
                            </div>
                            {price.price === lowestPrice && (
                              <div className="text-xs text-green-600 font-medium mt-1">
                                Best Deal!
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex gap-3">
                        <button 
                          onClick={() => handleBookDeal(hotel, bestDeal)}
                          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          Book Best Deal - ${bestDeal.price}
                        </button>
                        <button 
                          onClick={() => handleViewDetails(hotel)}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 hover:border-blue-300"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotelComparison;