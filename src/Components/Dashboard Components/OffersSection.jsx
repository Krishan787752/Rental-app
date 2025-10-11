import React from "react";
import { Clock } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Get flat 20% off",
    desc: "Get flat 20% off on your cart value when buying any product!",
    code: "BTH20",
    highlight: false,
  },
  {
    id: 2,
    title: "Get 22% off upto ₹1050",
    desc: "Apply this coupon to get 22% off upto ₹1050 on your first month rent. Great reason to start renting today!",
    code: "MAXSAVING",
    highlight: false,
  },
  {
    id: 3,
    title: "Get 20% off upto ₹1000",
    desc: "Apply this coupon to get 20% off upto ₹1000 on your first month rent",
    code: "FURMAX",
    highlight: true, // this one shows countdown
    countdown: "06h:22m:29s",
  },
];

const OffersSection = ({ offerId }) => {
  // find the offer by ID
  const filteredOffers = offerId
    ? offers.filter((offer) => offer.id === offerId)
    : offers;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-16 py-5 mt-10">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Offers & Discounts</h2>
        <button className="text-sm text-gray-600 hover:text-black flex  pr-0">
          See All →
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredOffers.map((offer) => (
          <div
            key={offer.id}
            className="relative bg-yellow-50 border border-yellow-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
          >
            {/* Countdown badge */}
            {offer.highlight && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Clock size={14} />
                {offer.countdown}
              </div>
            )}

            {/* Content */}
            <h3 className="text-lg font-bold mb-2">{offer.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{offer.desc}</p>
            <p className="font-semibold">
              Use Coupon Code : <span className="font-bold">{offer.code}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
