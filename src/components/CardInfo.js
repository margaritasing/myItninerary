import React from "react";
import styled from "styled-components";

const CardInfo = props => {
  console.log(props.itinerary);
  const itinerary = props.itinerary;

  return (
    <Section>
      {itinerary?.map(tarjetas => 
        <div className="card-group cardinfo" key={tarjetas._id}>
          <div className="row ">
            <div className="card col-lg-3">
              <img
                src={tarjetas.image}
                className="card-img-top mt-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{tarjetas.name}</h5>
                <p className="card-text">{tarjetas.description}</p>
                <p className="card-text">
                  <small className="text-muted">{tarjetas.price}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Section = styled.section`
  .cardinfo {
    margin-left: 280px;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  .fas {
    color: red;
    font-size: 30px;
    margin-left: 140px;
  }

  .formato {
    width: 63%;
    margin-left: 270px;
  }

  .area {
    height: 200px;
    margin-bottom: 20px;
    margin: 5px;
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
    margin-left: 10px;
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
