import React from 'react'
import Navbar from '../Components/Navbar'
import CustomSlider from '../Components/Slider'
import OffersSection from '../Components/OffersSection'
import BusinessSlider from '../Components/BusinessSlide'
import ImageCardSlider from '../Components/CustomerLove'
import Footer from '../Components/Footer'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>       {/* this is navbar */ } 
      <CustomSlider/>    {/* this is slider contains the images of the products  */ } 
      <OffersSection/>    {/* this is slider contains the offer of the products  */ } 
      <BusinessSlider/>  {/* this is slider contains only one img on a slide   */ } 

      {/* this is the banner img of video calling  */}
       <div className="w-full flex justify-center py-6 px-10">
      <img
        src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/video_call_widget_desktop.png" // put your image path here
        alt="Video Call Banner"
        className="w-full  rounded-xl shadow-md"
      />
    </div>

    {/* this is Customers love slider */}

    <ImageCardSlider/>

    {/* this is banner image of the be free of the furnish */}

      <div className="w-full py-6 px-10">
      <img
        src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/conviction_update.jpeg"
        alt="Full Width Banner"
        className="w-full object-contain rounded-xl shadow-md"
      />
    </div>
    {/* this is card of two similar images  */}

     <div className="w-[1300px] px-10 py-10 flex flex-col md:flex-row gap-4">
      {/* First Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/why_furlenco_carousel_desktop1.jpg"
          alt="First Banner"
          className="w-full rounded-lg object-contain"
        />
      </div>

      {/* Second Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/why_furlenco_carousel_v2.png"
          alt="Second Banner"
          className="w-full rounded-lg object-contain"
        />
      </div>
    </div>

    {/* this is footer component  */}
      <Footer/>
    </div>
  )
}

export default Dashboard
