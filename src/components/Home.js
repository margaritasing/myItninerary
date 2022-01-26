
import React from "react";

import Hero from './Hero';

import Service from "./Service";

import Top from "./Top";

import Carousel from './Carousel';




const Home = () =>{

    return(
        <div className="home">
            <Top />
            <Hero />
            <Service/>
            <Carousel/>
        </div>


    )
}





export default Home;