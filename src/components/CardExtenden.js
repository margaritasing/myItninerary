import React from "react";
import styled from "styled-components";

import Imagen from "../img/ImgCity/Berlin.jpg"
import Imagen1 from "../img/avatarImage.png"



const CardExtenden = () =>{


    return(
        <Section>
        <div className="card mb-3 card-extend">
            <div className="row g-0">
                <div className="col-md-6">
                <img src={Imagen} className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-6">
                <div className="card-body">
                <ul className="list-group list-group-horizontal">
                    <li className="">#Tour</li>
                    <li className="ms-2">#Vacation</li>
                    <li className="ms-2">#Turist</li>
                </ul>
                    <h5 className="card-title mt-2">Berlin</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div className="">
                <img src={Imagen1} className= "info-imagen" alt=""></img>
                <p className="info-parra">Jhon Doe</p>               
                </div>
               
                </div>
            </div>
        </div>       
        </Section>
    )
}

const Section = styled.section`
  
  .card-extend {
      max-width: 780px;
      margin-top: 30px;
      margin-left: 300px;
      border-radius:15px;    
    
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
}
 

    ul {
        list-style: none;
    }
  

    ul li{
        padding:10px;
        background-color: #9AD0EC;
        border-radius: 15px;
    }  

    .info-imagen{
        
        margin-top:10px;
        margin-left:30px;
        width:50px;
        border-radius:50%;
        
    }
  
    .info-parra{      
      margin-left: 20px;
      font-size: 20px;
     
    }
      img {
          height:100%;       
      }
    
  
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .card-extend {
        margin-top: 50px;
        margin-left: 0; 
    ; 
    }
    
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    
  }
`;



export default CardExtenden;