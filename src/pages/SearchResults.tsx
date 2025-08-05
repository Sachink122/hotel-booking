import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Filter, SortAsc } from 'lucide-react';
import HotelComparison from '../components/HotelComparison';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get('destination') || '';
  const checkin = searchParams.get('checkin') || '';
  const checkout = searchParams.get('checkout') || '';
  const guests = searchParams.get('guests') || '2';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Search</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <SortAsc className="w-4 h-4" />
                <span>Sort</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Summary */}
      <div className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Hotels in {destination}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-blue-100">
            {checkin && checkout && (
              <span>{checkin} - {checkout}</span>
            )}
            <span>{guests} {parseInt(guests) === 1 ? 'Guest' : 'Guests'}</span>
            <span>•</span>
            <span>156 hotels found</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-8">
        <HotelComparison />
      </div>
    </div>
  );
};

export default SearchResults;