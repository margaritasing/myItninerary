import React from "react";
import styled from "styled-components";
import Imagen1 from "../img/simgapur4.jpg"
import Imagen2 from "../img/singapur3.jpg"
import Imagen3 from "../img/singapur2.jpg"
import CardInfoTwo from "./CardInfoTwo";

const CardInfo = () => {

    return (
        <Section>
            <CardInfoTwo/>
             <div className="card-group cardinfo" >
                <div className="row ">
                <div className="card col-lg-3">
                <img src={Imagen2} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Go to the minimarket</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
                <div className="card col-lg-3">
                <img src={Imagen1} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Eat sea food</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
                <div className="card col-lg-3">
                <img src={Imagen3} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Go to karaoke</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>

                </div>
            </div>
        </Section>

     

    )


}

const Section = styled.section`
  
  .cardinfo{
      margin-left: 210px;
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .cardinfo{
        margin-left: 0;
    }
    
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .cardinfo{
        margin-left: 0;
    }
   
  }
`;




export default CardInfo;