import React from "react";
import CustomSlider from "../Components/Dashboard Components/CustomSlider";
import OffersSection from "../Components/Dashboard Components/OffersSection";
import NewArrivals from "../Components/buyPage Components/NewArival";
import Footer from "../Components/Dashboard Components/Footer";
import BusinessSlider from "../Components/Dashboard Components/BusinessSlide";
import WhyRent from "../Components/Dashboard Components/WhyRent";
import SpotlightImages from "../Components/buyPage Components/SpotLight";
import RentPromoBanners from "../Components/rentPage Components/RentPromoBanners";
import Ortho from "../Components/rentPage Components/Ortho";
import KidsFurniture from "../Components/rentPage Components/KidsFurniture";
import FreedomBanner from "../Components/rentPage Components/FreedomBanner";

const rentCategories = [
  { name: "Furniture Packages", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/7009502430%20(1).png" },
  { name: "Living Room", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/7009502430%20(1).png" },
  { name: "Bedroom", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/Premium%202.png" },
  { name: "Appliances", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/storage_icon.png" },
  { name: "Work From Home", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/study_icon.png" },
  { name: "Dining", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/dining_icon.png" },
  { name: "Storage", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/table_icon.png" },
  { name: "Office Chairs", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/chair_icon_v5.png" },
  { name: "Kids Room", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/Untitled%20design%20(46).png" },
  { name: "Mattresses", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/Matteress%201-1.png" },
  { name: "Outdoor", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/Premium%202.png" },
  { name: "Fitness", img: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/0/icon/Premium%202.png" },
];

export default function Rent() {
  return (
    <div className="px-4 mt-24">
      <h2 className="text-center text-3xl font-semibold mb-8">RENT FURNITURE</h2>

      <div className="py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
        {rentCategories.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img src={item.img} alt={item.name} className="w-24 h-12 md:w-48 md:h-20 object-contain rounded-lg mb-2" />
            <p className="mt-2 text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>

      <CustomSlider showButtons={false} />
      <OffersSection offerId={2} />
      <NewArrivals />
      <BusinessSlider />
      <WhyRent />
      <SpotlightImages images={[
        "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/7768/thumbnail/plp_1.jpg",
        "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/7768/thumbnail/plp_1.jpg",
        "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/7814/thumbnail/a.jpg",
        "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/7345/thumbnail/plp_1.jpg",
        "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/7333/thumbnail/plp_1.jpg",
      ]} />
      <RentPromoBanners />
      <Ortho />
      <KidsFurniture />
      <FreedomBanner imageUrl="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/newbrand_banner_rent_desktop_1.jpg" />
      <Footer />
    </div>
  );
}
