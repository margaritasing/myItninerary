
import React from "react";
import CheckboxesTags from "./CheckboxesTags";
import CardCities from "./CardCities";
import Testimonials from "./Testimonial";
import Top from "./Top";
import ServiceCities from "./ServiceCities";





const Cities = () => {

  return(
    <div className="cities" id="cities">
      
      <Top />
      <CheckboxesTags/>
      <CardCities/>
      <Testimonials/>
      <ServiceCities/>



    </div>



  )
}

export default Cities;
