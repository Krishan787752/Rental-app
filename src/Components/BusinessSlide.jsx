import React, { useState, useEffect } from "react";

const BusinessSlider = () => {
  const slides = [
    "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/newbrand_banner_unlmtd_slim_2.jpg",
    "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/newbrand_banner_genz_rent_slim.jpg",
    "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/furlenco_b2b_slim.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-[900px] mx-auto h-[220px] sm:h-[350px] overflow-hidden mt-6 sm:mt-10 rounded-xl sm:rounded-2xl shadow-lg">
      {/* Slide Image */}
      <img
        src={slides[current]}
        alt="slide"
        className="w-full h-full object-cover transition-all duration-700 rounded-xl sm:rounded-2xl"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow hover:bg-gray-200"
        aria-label="Previous Slide"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow hover:bg-gray-200"
        aria-label="Next Slide"
      >
        ❯
      </button>
    </div>
  );
};

export default BusinessSlider;
