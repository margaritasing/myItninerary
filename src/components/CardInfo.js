import React from "react";
import styled from "styled-components";



const CardInfo = (props) => {
    console.log(props)

    return (
         <Section>  
         {props.itinerary.map((tarjetas) => 
            
                        
             <div className="card-group cardinfo" >
                <div className="row ">
                <div className="card col-lg-3">
                            
                <img src={tarjetas.imagen[0].imagen1} className="card-img-top mt-2" alt="..."></img>
           
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
              <div className="card col-lg-3 ">
                <img src={tarjetas.imagen[0].imagen2} className="card-img-top mt-2" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Eat sea food</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
                <div className="card col-lg-3">
                <img src={tarjetas.imagen[0].imagen3} className="card-img-top mt-2" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Go to karaoke</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
  
  .cardinfo{
      margin-left: 280px;
      margin-top: 40px;
      margin-bottom: 10px;
  }

  .fas{
      color:red;
      font-size:30px;
      margin-left: 140px;
     
  }

  .formato{        
      width: 63%;
      margin-left: 270px;
  }


  .area{
    height:200px;
    margin-bottom: 20px;
    margin:5px;
    
  }

  h5{
      text-align:center;
      padding:15px;
      border-radius: 15px;
      background-color:#9AD0EC;
  }

  img{
      width:100%;
      height:200px;
      border-radius:15px;
  }

  .card {
    border-radius:15px;
    margin-left:10px;

  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .cardinfo{
        margin-left: 0;
    }

    .card {
        border-radius:5px;
        margin-left:0px;
    
      }

    
    
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .cardinfo{
        margin-left: 0;
    }
   
  }
`;




export default CardInfo;