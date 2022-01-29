import React from "react";
import styled from "styled-components";
import Imagen3 from "../img/singapur2.jpg"
import Imagen1 from "../img/avatarImage.png"


const CardInfoTwo = () =>{

    return(
      <Section>
            <div className="card mb-3 card-info">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={Imagen3} className="img-fluid rounded-start" alt="..."></img>
            <img src={Imagen1} className= "info-imagen" alt=""></img>
            <p className="info-parra">Jhon Doe</p>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">#singapur #tour #today</h5>
                <p className="card-text">One Day in Singapur</p>
                <p className="card-text">Price</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
    </div>
      </Section>


    )
}

const Section = styled.section`
  
  .card-info{
      max-width: 840px;
      margin-left: 200px;
  }

  .info-imagen{
      margin-left: 130px;
      margin-top:15px;
      width:50px;
      border-radius:50%;
  }

  .info-parra{
    margin-left: 110px;
    font-size: 20px;
   
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .info-imagen{
        margin-left: 130px;
        margin-top:15px;
        width:100px;
        border-radius:50%;
    }
    .info-parra{
        margin-left: 130px;
        font-size: 20px;
       
      }
    .card-info{
        margin-left: 0;
    }
    
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .card-info{
        margin-left: 0;
    }
   
  }
`;

export default CardInfoTwo;