'use client';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: './Images/2-1.png',
  },
  {
    image: './Images/3-1.png',
  },
  {
    image: './Images/banner-cepl.png',
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-play slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="relative bg-gray-900 text-white h-[600px] flex items-end justify-center pb-16 overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? 'opacity-70 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        ></div>
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-20"></div>

      {/* Left Arrow Button (No background, no border) */}
      <button 
        onClick={prevSlide} 
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 text-white hover:text-gray-300 transition text-3xl font-light cursor-pointer bg-transparent border-none outline-none"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      {/* Right Arrow Button (No background, no border) */}
      <button 
        onClick={nextSlide} 
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 text-white hover:text-gray-300 transition text-3xl font-light cursor-pointer bg-transparent border-none outline-none"
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      {/* Fixed Title */}
      <div className="relative z-30 text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">
          Driving Efficiency On Every Track!
        </h1>
      </div>
    </section>
  );
}