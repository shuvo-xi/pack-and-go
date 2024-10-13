import React from 'react';
import i1 from "../assets/first.png";
import i2 from "../assets/second.png";
import i3 from "../assets/third.png";

// Card Component
const Card = ({ index, title, workers, truckType, cost }) => (
  <div className="card border border-gray-200 rounded-lg p-4 m-2 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
    <div className="icon text-green-500 text-3xl mb-2">
      <i className="fas fa-truck"></i> {/* You can replace with a specific icon */}
    </div>
    <h3 className="text-lg font-bold">{index}. {title}</h3>
    <p>{workers} workers with necessary tools</p>
    <p>{truckType} truck</p>
    <p className="font-semibold">Cost: {cost} BDT</p>
  </div>
);

// Main Home Component
export default function Home() {
  return (
    <div className='w-4/6 mx-auto mt-1'>
      {/* Carousel Section */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={i1} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
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
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-around mt-8">
        <Card index={1} title="House & Office Shifting" workers="7-10" truckType="Large" cost="17000-20000" />
        <Card index={2} title="House & Office Shifting" workers="4-7" truckType="Mini" cost="12000-15000" />
        <Card index={3} title="House & Office Shifting" workers="4-10" truckType="N/A" cost="4000-5000" />
        <Card index={4} title="House & Office Shifting" workers="N/A" truckType="Large/Mini" cost="15000-20000" />
      </div>
    </div>
  );
}