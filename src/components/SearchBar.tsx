import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const suggestions = [
    { city: 'New York', country: 'USA', hotels: '2,450+ hotels', avgPrice: '$299' },
    { city: 'London', country: 'UK', hotels: '1,890+ hotels', avgPrice: '$245' },
    { city: 'Paris', country: 'France', hotels: '1,650+ hotels', avgPrice: '$189' },
    { city: 'Tokyo', country: 'Japan', hotels: '2,100+ hotels', avgPrice: '$156' },
    { city: 'Dubai', country: 'UAE', hotels: '980+ hotels', avgPrice: '$320' },
    { city: 'Bangkok', country: 'Thailand', hotels: '1,200+ hotels', avgPrice: '$89' },
    { city: 'Mumbai', country: 'India', hotels: '1,450+ hotels', avgPrice: '$65' },
    { city: 'Singapore', country: 'Singapore', hotels: '850+ hotels', avgPrice: '$198' }
  ];

  const handleDestinationChange = (value: string) => {
    setDestination(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) {
      onSearch(destination);
      navigate(`/search?destination=${encodeURIComponent(destination)}&checkin=${checkIn}&checkout=${checkOut}&guests=${guests}`);
    }
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: typeof suggestions[0]) => {
    const fullDestination = `${suggestion.city}, ${suggestion.country}`;
    setDestination(fullDestination);
    setShowSuggestions(false);
    onSearch(fullDestination);
    navigate(`/search?destination=${encodeURIComponent(fullDestination)}&checkin=${checkIn}&checkout=${checkOut}&guests=${guests}`);
  };

  const filteredSuggestions = suggestions.filter(s => 
    s.city.toLowerCase().includes(destination.toLowerCase()) ||
    s.country.toLowerCase().includes(destination.toLowerCase())
  );
  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-6 backdrop-blur-sm bg-white/95">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="relative md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Where to?</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={destination}
                onChange={(e) => handleDestinationChange(e.target.value)}
                placeholder="Enter destination"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              {showSuggestions && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 mt-1">
                  {filteredSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium text-gray-900">
                              {suggestion.city}, {suggestion.country}
                            </div>
                            <div className="text-sm text-gray-500">
                              {suggestion.hotels}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-blue-600">
                              from {suggestion.avgPrice}
                            </div>
                            <div className="text-xs text-gray-500">
                              per night
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  {filteredSuggestions.length === 0 && destination && (
                    <div className="px-4 py-3 text-gray-500 text-center">
                      No destinations found. Try searching for a city or country.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
            </div>
          </div>
          
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Search className="w-5 h-5" />
            Search Deals
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;