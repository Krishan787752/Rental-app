import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SpotlightImages({ images = [
  "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/7768/thumbnail/plp_1.jpg",
  "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/7768/thumbnail/plp_1.jpg",
  "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/7814/thumbnail/a.jpg",
  "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/7345/thumbnail/plp_1.jpg",
  "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/7333/thumbnail/plp_1.jpg",
] }) {
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
    <section className="w-full mx-auto px-4 py-8">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={`${src}-${idx}`} className="px-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="w-full h-48 md:h-56 bg-gray-50 flex items-center justify-center">
                <img src={src} alt={`spotlight ${idx + 1}`} className="max-h-full object-contain" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
