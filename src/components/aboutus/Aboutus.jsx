import React from "react";
import { images } from "../../constants";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="webdefend__aboutus-banner aboutus__section-padding" id="aboutus">
     <div className="webdefend__aboutus-container">
      <div className="webdefend__aboutus-graphic">
        <img src={images.aboutusGraphic}></img>
      </div>
      <div className="webdefend__aboutus-title">
        <p></p>
      </div>
     </div>
    </div>
  );
};

export default Aboutus;
