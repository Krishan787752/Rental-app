import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCardSlider() {
  const slides = [
    { id: 1, img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/testimonial_web1.jpg" },
    { id: 2, img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/testimonial_web2.jpg" },
    { id: 3, img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/testimonial_web3.jpg" },
    { id: 4, img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/testimonial_web4.jpg" },
    { id: 5, img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/testimonial_web5.jpg" },
  ];

  // Custom Arrows
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-700" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronLeft className="text-gray-700" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full px-6 py-8 bg-white relative">
      {/* Heading with emoji + text */}
      <div className="flex items-center mb-6">
        <span className="text-4xl mr-3">🙂</span>
        <div>
          <h2 className="text-3xl font-thin text-gray-800">
            Our Customers Love
          </h2>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Our Products and Services
          </p>
        </div>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-3">
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="w-auto h-[180px] object-contain rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
