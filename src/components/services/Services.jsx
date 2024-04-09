import React, {useState} from "react";
import "./services.css";
import { data } from "../../constants";
 

function Services() {
  const [offset, setOffset] = useState({ offsetX: 0, offsetY: 0 });

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const offsetX = -(mouseX / window.innerWidth - 0.5) * 30; // Adjust sensitivity here
    const offsetY = -(mouseY / window.innerHeight - 0.5) * 30; // Adjust sensitivity here
    setOffset({ offsetX, offsetY });
  };

  return (
    <div className="parallax-container" onMouseMove={handleMouseMove}>
      <div className="parallax-image-target" style={{ transform: `translate(${offset.offsetX}px, ${offset.offsetY}px)` }}>  
        <div className="parallax-image-border" style={{ transform: `translate(${offset.offsetX}px, ${offset.offsetY}px)` }}>
          <div className="parallax-image-aim" style={{ transform: `translate(${offset.offsetX}px, ${offset.offsetY}px)` }}>
            
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Services;
