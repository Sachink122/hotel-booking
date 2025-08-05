import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Wifi, Car, Coffee, Users, Phone, Mail, Calendar } from 'lucide-react';

const HotelDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock hotel data - in real app, this would come from API
  const hotel = {
    id: parseInt(id || '1'),
    name: 'Grand Palace Hotel',
    location: 'Manhattan, New York',
    rating: 4.8,
    reviews: 2456,
    images: [
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Spa', 'Pool', 'Gym', 'Room Service', 'Business Center'],
    description: 'Experience luxury at its finest at the Grand Palace Hotel. Located in the heart of Manhattan, our hotel offers world-class amenities, exceptional service, and stunning city views. Perfect for both business and leisure travelers.',
    prices: [
      { platform: 'Booking.com', price: 299, originalPrice: 349 },
      { platform: 'Expedia', price: 315 },
      { platform: 'Hotels.com', price: 328 },
      { platform: 'Agoda', price: 305, originalPrice: 340 }
    ],
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'info@grandpalacehotel.com',
      address: '123 Fifth Avenue, Manhattan, NY 10001'
    }
  };

  const bestPrice = Math.min(...hotel.prices.map(p => p.price));
  const bestDeal = hotel.prices.find(p => p.price === bestPrice)!;

  const handleBookNow = () => {
    navigate(`/booking/${hotel.id}?platform=${encodeURIComponent(bestDeal.platform)}&price=${bestDeal.price}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Search</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hotel Images */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                <img 
                  src={hotel.images[0]} 
                  alt={hotel.name}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                <div className="grid grid-cols-1 gap-2">
                  {hotel.images.slice(1).map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${hotel.name} ${index + 2}`}
                      className="w-full h-32 md:h-39 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Hotel Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 font-medium">{hotel.rating}</span>
                  </div>
                  <span className="text-gray-600">({hotel.reviews} reviews)</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">About This Hotel</h2>
                <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4" />
                    <span>{hotel.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4" />
                    <span>{hotel.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4" />
                    <span>{hotel.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  ${bestPrice}
                </div>
                <div className="text-gray-600">per night</div>
                <div className="text-sm text-green-600 font-medium">
                  Best price from {bestDeal.platform}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={handleBookNow}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mb-4"
              >
                Book Now - ${bestPrice}
              </button>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3">Compare All Prices:</h3>
                <div className="space-y-2">
                  {hotel.prices.map((price, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border ${
                        price.price === bestPrice 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{price.platform}</span>
                        <div className="text-right">
                          <span className="font-bold">${price.price}</span>
                          {price.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              ${price.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;