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
      <div className="webdefend__aboutus-container-text">
        <div className="webdefend__aboutus-title">
          <p>Who We Are</p>
        </div>
        <div className="webdefend__aboutus-description-title">
          <p>Cyber meet securi-TEA</p>
        </div>
        <div className="webdefend__aboutus-description-textbox">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Aboutus;
