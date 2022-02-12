
import React from "react";

import Hero from './Hero';
import Service from "./Service";
import Top from "./Top";
import Slider from "./Slider/Slider";
import Heroes from "./Heroes/Heroes";


const Home = () =>{

    return(
        <div className="home">
            <Top />
            <Hero />
            <Service/>
            <Heroes/>
            <Slider/>        
        </div>


    )
}





export default Home;