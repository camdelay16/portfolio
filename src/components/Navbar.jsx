import { Link } from "react-router-dom";
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
              to={"/"}
              onClick={toggleMenu}
            >
              <h4>Home</h4>
            </Link>
            <Link
              to={"/aboutme"}
              onClick={toggleMenu}
            >
              <h4>About Me</h4>
            </Link>
            <Link
              to={"/portfolio"}
              onClick={toggleMenu}
            >
              <h4>Portfolio</h4>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
