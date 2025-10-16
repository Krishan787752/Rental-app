import React from "react";

export default function RentPromoBanners({
  leftSrc = "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/rent_conviction1_may5.jpg",
  rightSrc = "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/rent_conviction2_may5.jpg",
}) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-16 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative rounded-2xl overflow-hidden shadow bg-white">
          <img src={leftSrc} alt="promo left" className="w-full h-48 md:h-64 lg:h-72 object-contain" />
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow bg-white">
          <img src={rightSrc} alt="promo right" className="w-full h-48 md:h-64 lg:h-72 object-contain" />
        </div>
      </div>
    </section>
  );
}
