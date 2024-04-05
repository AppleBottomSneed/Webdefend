import React from "react";
/**Import images here */
import "./header.css";

const Header = () => {
  return (
    <div className="kat__header section__padding" id="home">
      <div className="kat__header-content">
        <h1>
          <span className="kat__text-blue">Tax</span>
          <span className="kat__text-black"> done</span>
          <span className="kat__text-red"> right</span>
          <span className="kat__text-black">.</span>
        </h1>
        <p>
        Here at KAT Accounting Services we ensure our clients can sleep easy knowing their business is financially safe and sound.</p>
        <p>We combine our accounting and bookkeeping in a neat and affordable package hassle-free. </p>
        <p>Call us for a free consultation and we’ll get you sorted.</p>
        <div className="kat__header-content__input">
          <button type="button">Contact Us</button>
        </div>
      </div>
      <div className="kat__header-image">
        
      </div>
    </div>
  );
};

export default Header;
