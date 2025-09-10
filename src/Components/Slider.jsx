import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CustomSlider() {
  const slides = [
    {
      id: 1,
      img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/newbrand_banner_rent_desktop_1.jpg",
    },
    {
      id: 2,
      img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/newbrand_banner_unlmtd_desktop_1.jpg",
    },
    {
      id: 3,
      img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/newbrand_banner_buy_desktop_1.jpg",
    },
    {
      id: 4,
      img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/newbrand_banner_genz_rent_desktop_2.jpg",
    },
     {
      id: 5,
      img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/BUY_BANNERS_desktop_3.jpg",
    },
    {
        id: 6,
        img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/appliances_banner_rent_desktop2.jpg",
    },
  ];

  // Custom Arrows
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-600" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronLeft className="text-gray-600" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 2.5, // shows 2.5 cards like in your design
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-full px-6 py-10 pt-24 bg-white">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="w-full h-[350px] object-contain rounded-lg shadow"
            />
          </div>
        ))}
      </Slider>

        {/* Buttons below slider */}
    <div className="flex justify-center mt-[-4px]">
        <button className="bg-blue-800 text-white px-8 py-3 font-semibold rounded-l-lg">
          Buy Furniture →
        </button>
        <button className="bg-orange-600 text-white px-8 py-3 font-semibold">
          Rent Furniture →
        </button>
        <button className="bg-purple-800 text-white px-8 py-3 font-semibold rounded-r-lg">
          Unlmtd →
        </button>
      </div>
    </div>
  );
};
