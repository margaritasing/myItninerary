import React from "react";
import HeroCard from "./HeroCard";
import CardInfo from "./CardInfo";
import CardExtenden from "./CardExtenden";
import Coment from "./Coment";
import { useParams } from "react-router-dom";


const City = (props) => {
  const { id } = useParams();
  const citySelected = props.data.filter(city => city._id == id);
  console.log(citySelected);
  const cityItinerary = 
    props.itinerary.filter(city => city.city == citySelected[0].name)
  

  console.log(cityItinerary);

  return (
    <div className="city">
      <HeroCard />
      <CardExtenden itinerary={citySelected} />
      <CardInfo itinerary={cityItinerary} />
      <Coment />
    </div>
  );
};

export default City;
