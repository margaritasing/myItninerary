import React from "react";
import CheckboxesTags from "./CheckboxesTags";
import CardCities from "./CardCities";
import Testimonials from "./Testimonial";

import ServiceCities from "./ServiceCities";

const Cities = (props) => {
  return (
    <div className="cities" id="cities">
      <CheckboxesTags data={props.data} />
      <CardCities data={props.data} />
      <Testimonials />
      <ServiceCities />
    </div>
  );
};

export default Cities;
