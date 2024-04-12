import React from 'react';
import { images } from '../../constants';
import "./footer.css";

const Footer = () => {
  return (
    <div className="test">
      <div className="webdefend__footer footer__padding">
        <div className="webdefend__footer-links">
          <div className="webdefend__footer-links_logo">
            <img src={images.logoFooter} alt="footer_logo" />
          </div>
          <div className="webdefend__footer-links_logo">
            <div className="webdefend__footer-links-quicklinks">
              <h1 className="webdefend__footer-headtext">Quick Links</h1>
              <p>
                <a href='#home'>Home</a>
              </p>
              <p>
                <a href='#services'>Services</a>
              </p>
              <p>
                <a href='#about'>About Us</a>
              </p>
              <p>
                <a href='#contact'>Contact Us</a>
              </p>
            </div>
          </div>
          <div className="webdefend__footer-links_work">
            <div className="webdefend__footer-contact-container">
                <img src={images.emailFooter}></img>
                <div className="webdefend__footer-contact-text">
                    <p>yoloswag@gmail.com</p>
                </div>
            </div>
            <div className="webdefend__footer-contact-container">
                <img src={images.telephoneFooter}></img>
                <div className="webdefend__footer-contact-text">
                    <p>
                        <a href="tel:61160065506:">+61 1600 655 06</a>  
                    </p>
                </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="footer__copyright">
          <p >© 2023 Webdefend. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer