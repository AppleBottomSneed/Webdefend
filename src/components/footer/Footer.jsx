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
            <h1 className="webdefend__footer-headtext">Working Hours</h1>
            <p>Monday - Friday:</p>
            <p>9:30 am - 5pm</p>
            <p>Saturday:</p>
            <p>Appointment Only</p>
            <p>Sunday:</p>
            <p>Closed</p>
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