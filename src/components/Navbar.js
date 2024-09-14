import React, { useState } from "react";
import { HashRouter, Link } from "react-router-dom";
import { companyLogo } from "./variables"; // Assuming companyLogo is imported from variables
import "./Navbar.css"; // Import your CSS file for styling if necessary

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={'/mechwebsite/'}>
        <img src={companyLogo} alt="Logo" />
        </Link>
      </div>
      {/* Use a button to toggle menu on smaller screens */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <div className="menu-bars"></div>
        <div className="menu-bars"></div>
        <div className="menu-bars"></div>
      </button>
      {/* Navbar menu items */}
      <div className={`navbar-menu ${showMenu ? "show" : ""}`}>
        <Link to={"/mechwebsite/"} className="menu-button">
          Home
        </Link>
        <Link to={"/about"} className="menu-button">
          About
        </Link>
        <div className="menu-dropdown">
          <Link to={"/CADservices"} className="menu-button">
            Services 	&darr;
          </Link>
          <div className="dropdown-content">
            <Link to={"/CADservices"} className="dropdown-item">
              2D CAD Drawings
            </Link>
            <Link to={"/CADservices"} className="dropdown-item">
              3D CAD Modeling
            </Link>
            <Link to={"/CADservices"} className="dropdown-item">
              Paper to CAD
            </Link>
            <Link to={"/CADservices"} className="dropdown-item">
              Assembly Drawings
            </Link>
            <Link to={"/CADservices"} className="dropdown-item">
              Assembly Modeling
            </Link>
            <Link to={"/CADservices"} className="dropdown-item">
              3D Model Rendering
            </Link>
          </div>
        </div>
        <div className="menu-dropdown">
          <Link to={"/design"} className="menu-button">
            Design Solutions 	&darr;
          </Link>
          <div className="dropdown-content">
            <Link to={"/design/fea"} className="dropdown-item">
            FEA
            </Link>
            <Link to={"/design/machinedesign"} className="dropdown-item">
            Machine Design
            </Link>
            <Link to={"/design/spm"} className="dropdown-item">
            SPM
            </Link>
            <Link to={"/design/reeng"} className="dropdown-item">
            Reverse Engineering
            </Link>
            <Link to={"/design/motionanlysis"} className="dropdown-item">
            Motion Analysis
            </Link>
            <Link to={"/design/sheetmetal"} className="dropdown-item">
            Sheet Metal Design
            </Link>
            <Link to={"/design/mould"} className="dropdown-item">
            Mould Design
            </Link>
          </div>
        </div>
        {/* <div className="menu-dropdown">
          <Link to={"/pumping"} className="menu-button">
            Pumping Solutions 	&darr;
          </Link>
          <div className="dropdown-content">
            <Link to={"/pumping1"} className="dropdown-item">
              Pumping 1
            </Link>
            <Link to={"/pumping2"} className="dropdown-item">
              Pumping 2
            </Link>
          </div>
        </div> */}
        <Link to={"/contact"} className="menu-button">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
