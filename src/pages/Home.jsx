import React, { useState } from 'react';
import i1 from "../assets/first.png";
import i2 from "../assets/second.png";
import i3 from "../assets/third.png";

// Card Component
const Card = ({ index, title, workers, truckType, cost }) => (
  <div className="card border border-gray-200 rounded-lg p-4 m-2 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#f3f4f6]">
    <div className="icon text-green-500 text-3xl mb-2">
      <i className="fas fa-truck"></i>
    </div>
    <h3 className="text-lg font-bold">{index}. {title}</h3>
    <p>{workers} workers with necessary tools</p>
    <p>{truckType} truck</p>
    <p className="font-semibold">Cost: {cost} BDT</p>
  </div>
);

// Main Home Component
export default function Home() {
  const [selectedCard, setSelectedCard] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash On Delivery');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submit logic here (e.g., send data to an API)
    console.log({ selectedCard, contactNumber, location, date, paymentMethod });
  };

  return (
    <div className='w-4/6 mx-auto mt-1 pb-10 pt-20'>
      {/* Banner Section */}
      <div className="carousel w-full mb-6">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={i1} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={i2} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={i3} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      {/* Cards and Form Section */}
      <div className="flex gap-4">
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-3/4 gap-4">
          <Card index={1} title="House & Office Shifting" workers="7-10" truckType="Large" cost="17000-20000" />
          <Card index={2} title="House & Office Shifting" workers="4-7" truckType="Mini" cost="12000-15000" />
          <Card index={3} title="House & Office Shifting" workers="4-10" truckType="N/A" cost="4000-5000" />
          <Card index={4} title="House & Office Shifting" workers="N/A" truckType="Large/Mini" cost="15000-20000" />
        </div>

        {/* Form Section */}
        <div className="w-1/4 p-4 bg-blue-500 rounded-lg">
          <h2 className="text-xl font-bold text-white mb-4">Book Your Service</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="service" className="block text-sm font-medium text-white">Select Service</label>
              <select 
                id="service" 
                value={selectedCard} 
                onChange={(e) => setSelectedCard(e.target.value)} 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select a Service</option>
                <option value="1">House & Office Shifting (7-10 workers)</option>
                <option value="2">House & Office Shifting (4-7 workers)</option>
                <option value="3">House & Office Shifting (4-10 workers)</option>
                <option value="4">House & Office Shifting (Large/Mini)</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-white">Contact Number</label>
              <input 
                type="text" 
                id="contact" 
                value={contactNumber} 
                onChange={(e) => setContactNumber(e.target.value)} 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                placeholder="Enter your contact number"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-white">Location</label>
              <input 
                type="text" 
                id="location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                placeholder="Enter your location"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium text-white">Date</label>
              <input 
                type="date" 
                id="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">Payment Method</label>
              <select 
                value={paymentMethod} 
                onChange={(e) => setPaymentMethod(e.target.value)} 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              >
                <option value="Cash On Delivery">Cash On Delivery</option>
                <option value="Pay Now">Pay Now</option>
              </select>
            </div>
            <button type="submit" className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}