import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="navHamburgerContainer">
        <div
          className={`hamburger-menu ${isActive ? "active" : ""}`}
          id="hamburger-menu"
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <nav>
        <div className={`navbar ${isActive ? "active" : ""}`}>
          <div className="navCard">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              <h4 className="navLink">Home</h4>
            </Link>
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              <h4 className="navLink">About Me</h4>
            </Link>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              <h4 className="navLink">Portfolio</h4>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
