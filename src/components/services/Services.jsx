import React, {useState} from "react";
import "./services.css";
import { data } from "../../constants";
 

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
      
      <div className="webdefend__oreground-elements">
        <div className="section__padding">
        <div className="webdefend__services-container webdefend__services-container-padding">
          <div className="webdefend-title"><p>Hello</p></div>
        </div>
      </div>
      </div>
  </div>
  );
}

export default Services;
