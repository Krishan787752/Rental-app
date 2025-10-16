import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SpotlightSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ✅ Replace with your real API
    axios.get("https://fakestoreapi.com/products?limit=6")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching spotlight products:", err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false, dots: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false, dots: true } },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6">
          <p className="text-gray-700 text-sm">In the</p>
          <h2 className="text-3xl font-semibold">Spotlight</h2>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {products.map((item) => {
            const discount = Math.floor(Math.random() * 30 + 40); // 40–70%
            const oldPrice = Math.round(item.price * 80);
            const newPrice = Math.round(oldPrice - (oldPrice * discount) / 100);

            return (
              <div key={item.id} className="px-2">
                <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 md:h-56 object-contain bg-gray-50"
                  />

                  {/* Card Content */}
                  <div className="p-3">
                    <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
                    <span className="inline-block mt-2 text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      Brand New
                    </span>

                    {/* Price Section */}
                    <div className="mt-3">
                      <span className="text-lg font-bold text-black">₹{newPrice.toLocaleString()}</span>
                      <span className="ml-2 text-sm text-green-600 font-semibold">
                        -{discount}%
                      </span>
                      <div className="text-gray-400 text-sm line-through">₹{oldPrice.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
