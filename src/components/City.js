import React from "react";
import HeroCard from './HeroCard';
import CardInfo from './CardInfo';
import CardExtenden from './CardExtenden';
import Coment from "./Coment";

 

const City = (props) => {


    return(
        <div className="city">
        <HeroCard/>
        <CardExtenden itinerary ={props.itinerary}/>
        <CardInfo/> 
        <Coment/>       
        </div>


    )
}


export default City