import React, {useState} from "react";
import styled from "styled-components";

const CardInfo = (props) => {
  console.log(props.itinerary);

  return (
       <Section>  
       {props.itinerary.map( data=>           
                      
           <div className="card-group cardinfo">
              <div className="row ">
              <div className="card">
                          
              <img src={data.image} className="card-img-top mt-2" alt="..."></img>
         
              <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.description}</p>
                  <p className="card-text"><small className="text-muted">{data.price}</small></p>
              </div>
              </div>
              </div>
          </div>          
         )   
  }         
      </Section>
    )
}

const Section = styled.section`
  .cardinfo {
    margin-left: 280px; 
    margin-bottom: 10px;    
  }  

  h5 {
    text-align: center;
    padding: 15px;
    border-radius: 15px;
    background-color: #9ad0ec;
  }
 

  img {
    width: 100%;
    height: 200px;
    border-radius: 15px;
  }

  .card {
    border-radius: 15px;
    
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .cardinfo {
      margin-left: 0;
    }

    .card {
      border-radius: 5px;
      margin-left: 0px;
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .cardinfo {
      margin-left: 0;
    }
  }
`;

export default CardInfo;
