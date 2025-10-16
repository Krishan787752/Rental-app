import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "Mio Kids Sofa - Amber Yellow",
    image:
      "https://images.unsplash.com/photo-1603777953661-cf61e6eb05df?q=80&w=1200&auto=format&fit=crop",
    rent: 449,
    discount: 34,
  },
  {
    id: 2,
    title: "Zzoom Kids Crib - Jungle Green",
    image:
      "https://images.unsplash.com/photo-1603344202033-4b7d04a62d7a?q=80&w=1200&auto=format&fit=crop",
    rent: 899,
    discount: 34,
  },
  {
    id: 3,
    title: "Rio Kids Wardrobe - Jungle Green",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    rent: 899,
    discount: 34,
  },
  {
    id: 4,
    title: "Moonpic Kids Activity Center Table",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1200&auto=format&fit=crop",
    rent: 549,
    discount: 34,
  },
  {
    id: 5,
    title: "Kids Book Shelf - Natural Wood",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    rent: 379,
    discount: 34,
  },
  {
    id: 6,
    title: "Kids Study Chair - Blue",
    image:
      "https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=1200&auto=format&fit=crop",
    rent: 299,
    discount: 34,
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute left-[-16px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 items-center justify-center shadow-md hover:bg-gray-100"
    aria-label="Previous"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute right-[-16px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 items-center justify-center shadow-md hover:bg-gray-100"
    aria-label="Next"
  >
    <FaChevronRight />
  </button>
);

export default function KidsFurniture() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false, dots: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false, dots: true } },
    ],
  };

  return (
    <section className="w-full mx-auto px-4 py-10 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-start gap-2">
          <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">🧒</span>
          <div>
            <h2 className="text-xl font-semibold">Kids Furniture</h2>
            <p className="text-[10px] font-semibold tracking-wide text-gray-500">TO RENT</p>
          </div>
        </div>
        <button className="text-sm text-gray-600 hover:text-black">View All →</button>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {items.map((it) => (
          <div key={it.id} className="px-2">
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition flex flex-col">
              <div className="w-full h-44 md:h-52 bg-gray-50">
                <img src={it.image} alt={it.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 flex-1">
                <h3 className="text-sm font-semibold leading-snug line-clamp-2">{it.title}</h3>
                <span className="inline-block mt-3 text-[11px] px-2 py-1 bg-blue-100 text-blue-700 rounded">Rent</span>
              </div>
              <div className="bg-yellow-400 px-3 py-2 flex items-center justify-between">
                <span className="text-lg font-bold text-black">-{it.discount}%<span className="text-xs font-semibold ml-1">OFF</span></span>
                <span className="text-lg font-bold text-black">₹{it.rent}/mo</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
