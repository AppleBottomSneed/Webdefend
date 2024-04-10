import React, {useState} from "react";
import "./services.css";
import { data } from "../../constants";
 
const ServiceCard = ({service: { imgUrl, title, description }}) => (
  <div className="webdefend__infocard webdefend__container-padding">
    <div className="webdefend__infocard-feature">
      <div className="webdefend__infocard-icon">
        <img src={imgUrl} alt="business icon" />
      </div>
    </div>
    <div className="webdefend__infocard-title">
        <p>{title}</p>
    </div>
    <div className="webdefend__infocard-description">
        <p>{description}</p>
    </div>
  </div>
);

function Services() {
  const [offset, setOffset] = useState({ offsetX: 0, offsetY: 0 });

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const offsetX = -(mouseX / window.innerWidth - 0.5) * 60; // Adjust sensitivity here
    const offsetY = -(mouseY / window.innerHeight - 0.5) * 60; // Adjust sensitivity here
    setOffset({ offsetX, offsetY });
  };

  return (
    <div className="webdefend__parallax-container" onMouseMove={handleMouseMove}>
      <div className="webdefend__parallax-content" style={{ transform: `translate(${offset.offsetX}px, ${offset.offsetY}px)` }}>
        <div className="webdefend__parallax-image-target" style={{ transform: `translate(${offset.offsetX}px, ${offset.offsetY}px)` }}>  
          <div className="webdefend__parallax-image-border" style={{ transform: `translate(${offset.offsetX}px, ${offset.offsetY}px)` }}>
            <div className="webdefend__parallax-image-aim" style={{ transform: `translate(${offset.offsetX}px, ${offset.offsetY}px)` }}>   
            </div>
          </div>
        </div>
      </div>
      
      <div className="webdefend__foreground-elements">
        <div className="section__padding">
          <div className="webdefend__services-container">
            <div className="webdefend__services-title">
              <p>M365 Security Assessments</p>
            </div>
          </div>
          <div className="webdefend__infocard-flex">
            {data.services.map((service) => <ServiceCard service={service}/>)}
        </div>
      </div>
      </div>
  </div>
  );
}

export default Services;
