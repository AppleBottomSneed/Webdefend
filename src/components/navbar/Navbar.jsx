import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { images } from "../../constants";
import "./navbar.css";

/* Edit here for nav link changes */
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#aboutus">About Us</a>
    </p>
    <p>
      <a href="#support">Support</a>
    </p>
  </>
);

//BEM = block element modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="webdefend__navbar">
      <div className="webdefend__navbar-links">
        <div className="webdefend__navbar-links_logo">
          <div className="webdefend__navbar-links_logo_big">
            <img src={images.logo} alt="webdefend logo" />
          </div>
          <div className="webdefend__navbar-links_logo_mobile">
            <img src={images.logoSmall} alt="webdefend logo small" /> 
          </div>
        </div>
        <div className="webdefend__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="webdefend__navbar-sign">
        <button>
          <a href="#contact">Consult</a>
        </button>
      </div>
      {/* Mobile Menu below*/}
      <div className="webdefend__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)}/>
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)}/>
        )}
        {toggleMenu && (
          <div className="webdefend__navbar-menu_container scale-up-center">
            <div className="webdefend__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="webdefend__navbar-menu_container-links-sign">
              <button>
                <a href="#contact" >Consult</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
