import React from "react";
import { images } from "../../constants";
import "./contact.css";

const Contact = () => {
  return (
    <div className="webdefend__contact-banner contact__section-padding" id="contact">
     <div className="webdefend__contact-container">
      
      <div className="webdefend__contact-container-text">
        <div className="webdefend__contact-title">
          <p>Contact Us</p>
        </div>
        <div className="webdefend__contact-container-both">
            <div className="webdefend__contact-container-details">
                <div className="webdefend__contact-graphic">
                    <img src={images.emailIcon}></img>
                </div>
                <div className="webdefend__contact-description-title">
                    <p>yoloswag@gmail.com</p>
                </div>
            </div>
            <div className="webdefend__contact-container-details">
                <div className="webdefend__contact-graphic">
                    <img src={images.telephoneIcon}></img>
                </div>
                <div className="webdefend__contact-description-title">
                    <p>
                        <a href="tel:61160065506:">+61 1600 655 06</a>  
                    </p>
                </div>
            </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Contact;
