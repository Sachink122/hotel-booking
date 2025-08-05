import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import HotelComparison from './components/HotelComparison';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import TrustSignals from './components/TrustSignals';
import FloatingAIButton from './components/FloatingAIButton';
import SearchResults from './pages/SearchResults';
import HotelDetails from './pages/HotelDetails';
import BookingPage from './pages/BookingPage';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In a real app, this would trigger the hotel search
    console.log('Searching for:', query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Images - Split Screen */}
        <div className="absolute inset-0 flex">
          {/* Luxury Hotel Side */}
          <div className="w-1/2 relative">
            <img 
              src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Luxury Hotel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Luxury Stays</h3>
              <p className="text-white/90">Premium comfort & service</p>
            </div>
          </div>
          
          {/* Budget Hotel Side */}
          <div className="w-1/2 relative">
            <img 
              src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Budget Hotel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-8 right-8 text-white text-right">
              <h3 className="text-2xl font-bold mb-2">Smart Savings</h3>
              <p className="text-white/90">Great value for money</p>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Get the best hotel deal,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                every time
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Compare prices from 50+ booking sites instantly. Save time, save money, and book with confidence.
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>2M+ happy customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>50+ booking partners</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>24/7 price monitoring</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <HotelComparison />
      <WhyChooseUs />
      <Testimonials />
      <TrustSignals />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">TravelDeals</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                The world's most trusted hotel comparison platform. We help millions of travelers find the best deals every day.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">Download our app:</span>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                  App Store
                </button>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                  Google Play
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TravelDeals. All rights reserved. Built with ❤️ for travelers worldwide.</p>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <FloatingAIButton />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/hotel/:id" element={<HotelDetails />} />
      <Route path="/booking/:id" element={<BookingPage />} />
    </Routes>
  );
}

export default App;