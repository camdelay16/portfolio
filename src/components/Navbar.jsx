import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={`hamburger-menu ${isActive ? "active" : ""}`}
        id="hamburger-menu"
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav>
        <div className={`navbar ${isActive ? "active" : ""}`}>
          <Link to={"/"}>
            <h4>Home</h4>
          </Link>
          <Link to={"/aboutme"}>
            <h4>About Me</h4>
          </Link>
          <Link to={"/portfolio"}>
            <h4>Portfolio</h4>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
