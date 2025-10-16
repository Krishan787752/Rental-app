import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
  >
    <FaChevronRight />
  </button>
);

export default function DealsSlider() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // Example API (replace with your backend API)
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        // Add fake discount and label for demo
        const updated = data.map((item, index) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          price: Math.floor(item.price * 80), // convert USD to INR approx
          oldPrice: Math.floor(item.price * 120), // fake old price
          discount: Math.floor(((item.price * 120 - item.price * 80) / (item.price * 120)) * 100),
          label: index % 2 === 0 ? "Brand New" : "Refurbished",
        }));
        setDeals(updated);
      })
      .catch((err) => console.error("Error fetching deals:", err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false, dots: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false, dots: true } },
    ],
  };

  return (
    <div className="w-full mx-auto px-4 py-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span className="bg-purple-600 text-white rounded-full p-1">🛒</span>
          Deals of the Day
        </h2>
        <button className="text-sm text-gray-600 hover:text-black flex items-center gap-1">
          View All →
        </button>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {deals.map((deal) => (
          <div key={deal.id} className="px-2">
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col">
              {/* Product Image */}
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 md:h-56 object-contain bg-gray-50"
              />

              {/* Product Details */}
              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-sm font-semibold line-clamp-2 mb-2">
                  {deal.title}
                </h3>

                {/* Label */}
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded mb-2">
                  {deal.label}
                </span>

                {/* Price + Discount */}
                <div className="bg-yellow-400 rounded-t px-3 py-2 mt-auto">
                  <span className="text-red-700 font-bold">
                    -{deal.discount}% OFF
                  </span>
                  <span className="ml-2 text-gray-900 font-semibold">
                    ₹ {deal.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
