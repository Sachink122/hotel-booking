import React, { useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, CheckCircle, Calendar, Users, MapPin } from 'lucide-react';

const BookingPage: React.FC = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const platform = searchParams.get('platform') || '';
  const price = searchParams.get('price') || '';
  
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    specialRequests: ''
  });

  // Mock hotel data
  const hotel = {
    id: parseInt(id || '1'),
    name: 'Grand Palace Hotel',
    location: 'Manhattan, New York',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingStep === 1) {
      setBookingStep(2);
    } else {
      // Process booking
      setBookingStep(3);
    }
  };

  const renderBookingForm = () => {
    if (bookingStep === 3) {
      return (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your reservation at {hotel.name} has been confirmed. 
            You will receive a confirmation email shortly.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-green-800 mb-2">Booking Details</h3>
            <div className="text-sm text-green-700 space-y-1">
              <p>Confirmation ID: #TRV{Date.now().toString().slice(-6)}</p>
              <p>Hotel: {hotel.name}</p>
              <p>Platform: {platform}</p>
              <p>Total: ${price}/night</p>
            </div>
          </div>
          <Link 
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Another Hotel
          </Link>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        {bookingStep === 1 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any special requests or preferences..."
              />
            </div>
          </>
        )}

        {bookingStep === 2 && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Important Notice</h3>
              <p className="text-sm text-blue-700">
                You will be redirected to {platform} to complete your payment securely. 
                Your booking details have been saved.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Booking Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Guest:</span>
                  <span>{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span>{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span>Dates:</span>
                  <span>{formData.checkIn} to {formData.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span>{formData.guests}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Total per night:</span>
                  <span>${price}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4" />
              <span>Your payment will be processed securely by {platform}</span>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          {bookingStep === 1 ? (
            <>Continue to Payment</>
          ) : (
            <>
              <CreditCard className="w-4 h-4" />
              Complete Booking on {platform}
            </>
          )}
        </button>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to={`/hotel/${id}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Hotel Details</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {bookingStep === 3 ? 'Booking Confirmation' : 'Complete Your Booking'}
                </h1>
                {bookingStep < 3 && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className={`px-2 py-1 rounded-full ${bookingStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>1</span>
                    <span>Guest Details</span>
                    <div className="w-8 h-px bg-gray-300"></div>
                    <span className={`px-2 py-1 rounded-full ${bookingStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>2</span>
                    <span>Payment</span>
                  </div>
                )}
              </div>

              {renderBookingForm()}
            </div>
          </div>

          {/* Hotel Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="font-semibold mb-4">Your Booking</h2>
              
              <div className="flex gap-3 mb-4">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{hotel.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{hotel.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform:</span>
                  <span className="font-medium">{platform}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per night:</span>
                  <span className="font-medium">${price}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 p-2 rounded">
                  <CheckCircle className="w-3 h-3" />
                  <span>Best available price</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Shield className="w-3 h-3" />
                  <span>Secure booking protected by SSL encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;