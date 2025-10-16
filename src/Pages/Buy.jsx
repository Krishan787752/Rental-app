import React from "react";
import CustomSlider from "../Components/Dashboard Components/CustomSlider";
import OffersSection from "../Components/Dashboard Components/OffersSection";
import DealsSlider from "../Components/buyPage Components/DealsSlider";
import NewArrivals from "../Components/buyPage Components/NewArival";
import StealDeals from "../Components/buyPage Components/StealDeals";
import SpotlightSlider from "../Components/buyPage Components/SpotLight";
import Footer from "../Components/Dashboard Components/Footer";

const categories = [
  { name: "Living Room", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/7009502430%20(1).png" },
  { name: "Bedroom", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/7009502430%20(1).png" },
  { name: "Premium", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/Premium%202.png" },
  { name: "Storage", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/Premium%202.png" },
  { name: "Study", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/storage_icon.png" },
  { name: "Dining", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/study_icon.png" },
  { name: "Tables", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/dining_icon.png" },
  { name: "Lounger", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/table_icon.png" },
  { name: "Best Deals", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/chair_icon_v5.png" },
  { name: "Mattress", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/Untitled%20design%20(46).png" },
  { name: "Z Rated", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/Matteress%201-1.png" },
  
];

export default function Buy() {
  return (
    <div className="px-4 mt-24">
      {/* Heading */}
      <h2 className="text-center text-3xl font-semibold mb-8">BUY FURNITURE</h2>

      {/* Grid */}
      <div className="py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-24 h-12 md:w-48 md:h-20 object-contain rounded-lg mb-2"
            />
            {/* Label */}
            <p className="mt-2 text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>

      <CustomSlider showButtons={false} /> {/* this is the slider below the main-navbar*/}
      <OffersSection offerId={1}/>   {/*this is offer section */}

      <DealsSlider/> {/* this is deal slider  */}
      <NewArrivals/> {/* new arrival section */}
      <StealDeals/>  {/* steal deals section*/}
      <SpotlightSlider/>  {/*  spot light slider*/}  
      <Footer/>  
    </div>
  );
}
