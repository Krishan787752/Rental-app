import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StealDeals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ✅ API call (replace with your own furniture API)
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
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
    <div className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <span className="bg-purple-600 text-white p-2 rounded-full">⭐</span>
            Steal Deals
          </h2>
          <button className="text-sm text-gray-600 hover:text-black">
            View All →
          </button>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {products.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-t-lg w-full h-48 md:h-56 object-contain"
                />

                {/* Product Content */}
                <div className="p-3">
                  <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
                  <span className="inline-block mt-2 text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                    Refurbished
                  </span>
                </div>

                {/* Discount Strip */}
                <div className="bg-yellow-400 px-3 py-2 flex justify-between items-center rounded-b-lg">
                  <span className="text-lg font-bold text-black">
                    -{Math.floor(Math.random() * 30 + 50)}% OFF
                  </span>
                  <span className="text-lg font-bold text-black">
                    ₹{Math.round(item.price * 80)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
