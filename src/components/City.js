import React from "react";
import HeroCard from './HeroCard';
import CardInfo from './CardInfo';
import CardExtenden from './CardExtenden';
import Coment from "./Coment";



const City = () => {


    return(
        <div className="city">
        <HeroCard/>
        <CardExtenden/>
        <CardInfo/> 
        <Coment/>       
        </div>


    )
}


export default City