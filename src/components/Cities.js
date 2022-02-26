import React from "react";
import { useFetchCity } from "../Search/UseFetchCity";
import CheckboxesTags from "./CheckboxesTags";
import CardCities from "./CardCities";
import Testimonials from "./Testimonial";

import ServiceCities from "./ServiceCities";
import FormCity from "./FormCity";

const Cities = () => {
  const [city, handleSubmit] = useFetchCity();
  return (
    <div className="cities" id="cities" >
     <FormCity handleSubmit={handleSubmit}/>
      <CardCities />
      <Testimonials />
      <ServiceCities />
    </div>
  );
};

export default Cities;
