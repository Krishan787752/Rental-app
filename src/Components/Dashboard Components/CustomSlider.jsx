import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CustomSlider({ showButtons = true }) {
  const slides = [
    { id: 1, img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/newbrand_banner_rent_desktop_1.jpg" },
    { id: 2, img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/newbrand_banner_unlmtd_desktop_1.jpg" },
    { id: 3, img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/newbrand_banner_buy_desktop_1.jpg" },
    { id: 4, img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/newbrand_banner_genz_rent_desktop_2.jpg" },
    { id: 5, img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/BUY_BANNERS_desktop_3.jpg" },
    { id: 6, img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/appliances_banner_rent_desktop2.jpg" },
  ];

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-600 text-base sm:text-lg" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronLeft className="text-gray-600 text-base sm:text-lg" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-full px-2 sm:px-6 py-6 sm:py-10 pt-10 sm:pt-24 bg-white overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-1 sm:px-2">
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="w-full h-[180px] sm:h-[260px] object-cover rounded-xl shadow transition-all duration-300"
            />
          </div>
        ))}
      </Slider>

      {/* Buttons only if showButtons = true */}
      {showButtons && (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0 mt-4 sm:mt-[-4px]">
          <button className="bg-blue-800 text-white px-6 py-3 text-base sm:text-lg font-semibold rounded-full w-full sm:w-auto transition hover:bg-blue-900">
            Buy Furniture →
          </button>
          <button className="bg-orange-600 text-white px-6 py-3 text-base sm:text-lg font-semibold rounded-full w-full sm:w-auto transition hover:bg-orange-700">
            Rent Furniture →
          </button>
          <button className="bg-purple-800 text-white px-6 py-3 text-base sm:text-lg font-semibold rounded-full w-full sm:w-auto transition hover:bg-purple-900">
            Unlmtd →
          </button>
        </div>
      )}
    </div>
  );
}
