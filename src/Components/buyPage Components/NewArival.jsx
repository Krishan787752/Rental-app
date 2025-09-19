import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ✅ API se data fetch
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
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="w-full mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <span className="bg-purple-600 text-white p-2 rounded-full">⬇</span>
            New Arrivals
          </h2>
          <button className="text-sm text-gray-600 hover:text-black">
            View All →
          </button>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {products.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full h-56 object-contain"
                />
                <div className="mt-3">
                  <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
                  <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    Brand New
                  </span>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold">₹{Math.round(item.price * 80)}</span>
                    <span className="text-gray-500 line-through text-sm">
                      ₹{Math.round(item.price * 100)}
                    </span>
                    <span className="text-green-600 text-sm font-semibold">-20%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
