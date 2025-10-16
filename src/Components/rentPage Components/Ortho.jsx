import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mattresses = [
  {
    id: 1,
    title: "Mattress Premium Foam Queen",
    size: "(72 x 60 x 6 inches)",
    image:
      "https://images.unsplash.com/photo-1586158291800-2665f07bba81?q=80&w=1200&auto=format&fit=crop",
    rent: 459,
    discount: 34,
  },
  {
    id: 2,
    title: "Premium Foam Mattress King",
    size: "(78 x 72 x 6 inches)",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    rent: 529,
    discount: 34,
  },
  {
    id: 3,
    title: "Premium Foam Mattress Single",
    size: "(78 x 36 x 6 inches)",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    rent: 359,
    discount: 34,
  },
  {
    id: 4,
    title: "Mattress Premium Foam Double",
    size: "(72 x 48 x 4 inches)",
    image:
      "https://images.unsplash.com/photo-1622902046580-2b1f56bbfcd5?q=80&w=1200&auto=format&fit=crop",
    rent: 409,
    discount: 34,
  },
  {
    id: 5,
    title: "Ortho Foam Mattress Queen",
    size: "(78 x 60 x 6 inches)",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    rent: 489,
    discount: 34,
  },
  {
    id: 6,
    title: "Ortho Memory Mattress King",
    size: "(84 x 72 x 6 inches)",
    image:
      "https://images.unsplash.com/photo-1616596873051-7c3a4bbfd0a1?q=80&w=1200&auto=format&fit=crop",
    rent: 569,
    discount: 34,
  },
];

export default function Ortho() {
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
    <section className="w-full mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-start gap-2">
          <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">🛏️</span>
          <div>
            <h2 className="text-xl font-semibold">Ortho Mattresses</h2>
            <p className="text-[10px] font-semibold tracking-wide text-gray-500">TO RENT</p>
          </div>
        </div>
        <button className="text-sm text-gray-600 hover:text-black">View All →</button>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {mattresses.map((m) => (
          <div key={m.id} className="px-2">
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition flex flex-col">
              <div className="w-full h-40 md:h-48 bg-gray-50 flex items-center justify-center">
                <img src={m.image} alt={m.title} className="max-h-full object-contain" />
              </div>

              <div className="p-3 flex-1">
                <h3 className="text-sm font-semibold leading-snug line-clamp-2">{m.title}</h3>
                <p className="text-xs text-gray-500 mt-1">Size : {m.size}</p>
                <span className="inline-block mt-3 text-[11px] px-2 py-1 bg-blue-100 text-blue-700 rounded">Rent</span>
              </div>

              <div className="bg-yellow-400 px-3 py-2 flex items-center justify-between">
                <span className="text-lg font-bold text-black">-{m.discount}%<span className="text-xs font-semibold ml-1">OFF</span></span>
                <span className="text-lg font-bold text-black">₹{m.rent}/mo</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
