import React from "react";
import styled from "styled-components";

import Imagen from "../img/ImgCity/Berlin.jpg"
import Imagen1 from "../img/avatarImage.png"
import Imagen2 from "../img/ImgCity/berlin1.jpg"
import Imagen3 from "../img/ImgCity/berlin2.jpg"
import Imagen4 from "../img/ImgCity/berlin3.jpg"


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
                <ul class="list-group list-group-horizontal">
                    <li class="">#Tour</li>
                    <li class="ms-2">#Vacation</li>
                    <li class="ms-2">#Turist</li>
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
        
      <div className="colapso">
            <p>
              <a class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1"><i class="fas fa-angle-double-down"></i></a>              
            </p>
            <div class="row">
            <div class="col-sm-6 col-lg-3 foto ">
                <div class="collapse multi-collapse" id="multiCollapseExample1">                
                <img src={Imagen2} className= "info-imagen" alt=""></img>  
                <h4>Admire Nature</h4>          
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 foto">
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                <img src={Imagen3} className= "info-imagen" alt=""></img> 
                <h4>Admire the view</h4>          
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 foto">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
               <img src={Imagen4} className= "info-imagen" alt=""></img>   
               <h4>Admire the lights</h4>            
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
    
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
}
    .colapso{
        margin-top:20px;
        margin-left:260px;
    }

    ul {
        list-style: none;
    }

    h4{
        text-align:center;
        margin-left:70px;
        margin-top:20px;
        font-size:20px;
        padding:10px;
        background-color: #9AD0EC;
        border-radius: 15px;
    }

    ul li{
        padding:10px;
        background-color: #9AD0EC;
        border-radius: 15px;
    }

    .foto img{
        width:100%;
        border-radius:0;
    }
    

    .colapso p i{
        font-size:30px;
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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    icon {
      img {
        margin-left:50px;
      }
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;



export default CardExtenden;