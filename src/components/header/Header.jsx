import React from "react";
/**Import images here */
import "./header.css";

const Header = () => {
  return (
    <div className="webdefend__header section__padding" id="home">
      <div className="webdefend__header-content">
        <h1>
          <span className="webdefend__text-black">Unparallelled</span>
          <span className="webdefend__text-white"> right</span>
        </h1>
        <p>
        We are dedicated to staying ahead of emerging threats and keeping your information secure. Your privacy is paramount, and we strive to maintain top-notch security measures to earn and keep your trust.</p>
        <div className="webdefend__header-content__input">
          <button type="button">Consult</button>
        </div>
      </div>
      <div className="webdefend__header-image">
        
      </div>
    </div>
  );
};

export default Header;
