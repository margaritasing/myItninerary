
import React from "react";

import Hero from './Hero';
import Service from "./Service";
import Top from "./Top";
import Slider from "./Slider/Slider";
import Heroes from "./Heroes/Heroes";
import Galeria from "./Galeria/Galeria";


const Home = () =>{

    return(
        <div className="home">
            <Top />
            <Hero />
            <Service/>
            <Heroes/>
            <Galeria/>
            <Slider/>        
        </div>


    )
}





export default Home;