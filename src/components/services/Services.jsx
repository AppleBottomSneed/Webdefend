import React from "react";
import "./services.css";
import { data } from "../../constants";
 

const ServiceCard = ({service: { imgUrl, title, description }}) => (
  <div className="webdefend-infocard webdefend-container-padding">
    <div className="webdefend-infocard-feature">
      <div className="webdefend-infocard-icon">
        <img src={imgUrl} alt="business icon" />
      </div>
      <div className="webdefend-infocard-title">
        <p>{title}</p>
      </div>
    </div>
    <div className="webdefend-infocard-description">
        <p>{description}</p>
    </div>
    {/*
    <div className="webdefend-infocard-button">
      <button>Learn More</button>
    </div>
    */} 
  </div>
);


const Services = () => {
    

  return (
    <div className="section__padding " id="services">
      <div className="webdefend-container webdefend-container-padding">
        <div className="webdefend-title">
          <p>Our Services</p>
        </div>
        <div className="webdefend-infocard-flex">
          {/* {data.services.map((service) => <ServiceCard service={service}/>)} */} 
        </div>
        {/*
        <div className="webdefend-infocard-viewall">
          <button>View All Services</button>
        </div>
        */} 
      </div>
    </div>
  );
};

export default Services;
