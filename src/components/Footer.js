import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom
import { address, companyLogo, companyName, contactEmail, contactNumber } from "./variables"; // Replace with your actual logo and company name import
import "./Footer.css"; // Import your CSS file for styling if necessary

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="content">
        <img src={companyLogo} alt="Logo" className="company-logo" />
        <div className="footer-menu">
          <div className="footer-menu-column">
            <h3 className="footer-menu-title">Services</h3>
            <ul className="footer-menu-list">
              <li>
                <Link to={"/CADservices"} className="footer-menu-item">
                  2D CAD Drawings
                </Link>
              </li>
              <li>
                <Link to={"/CADservices"} className="footer-menu-item">
                  3D CAD Modeling
                </Link>
              </li>
              <li>
                <Link to={"/CADservices"} className="footer-menu-item">
                  Paper to CAD
                </Link>
              </li>
              <li>
                <Link to={"/CADservices"} className="footer-menu-item">
                  Assembly Drawings
                </Link>
              </li>
              <li>
                <Link to={"/CADservices"} className="footer-menu-item">
                  Assembly Modeling
                </Link>
              </li>
              <li>
                <Link to={"/CADservices"} className="footer-menu-item">
                  3D Model Rendering
                </Link>
              </li>
              {/* Add more service links as needed */}
            </ul>
          </div>
          <div className="footer-menu-column">
            <h3 className="footer-menu-title">Design Solutions</h3>
            <ul className="footer-menu-list">
              <li>
            <Link to={"/design/fea"} className="footer-menu-item">
            FEA
            </Link></li>
            <li><Link to={"/design/machinedesign"} className="footer-menu-item">
            Machine Design
            </Link></li>
            <li><Link to={"/design/spm"} className="footer-menu-item">
            SPM
            </Link></li>
            <li><Link to={"/design/reeng"} className="footer-menu-item">
            Reverse Engineering
            </Link></li>
            <li><Link to={"/design/motionanlysis"} className="footer-menu-item">
            Motion Analysis
            </Link></li>
            <li><Link to={"/design/sheetmetal"} className="footer-menu-item">
            Sheet Metal Design
            </Link></li>
            <li><Link to={"/design/mould"} className="footer-menu-item">
            Mould Design
            </Link></li>
            </ul>
          </div>
          {/* <div className="footer-menu-column">
            <h3 className="footer-menu-title">Pumping Solutions</h3>
            <ul className="footer-menu-list">
              <li>
                <Link to={"/pumping1"} className="footer-menu-item">
                  Pumping 1
                </Link>
              </li>
              <li>
                <Link to={"/pumping2"} className="footer-menu-item">
                  Pumping 2
                </Link>
              </li>
              <li>
                <Link to={"/pumping3"} className="footer-menu-item">
                  Pumping 3
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="footer-menu-column">
            <h3 className="footer-menu-title">Contact</h3>
            <ul className="footer-menu-list">
              <li>
                <Link to={"/contact"} className="footer-menu-item">
                  Address : {address}
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="footer-menu-item">
                  Phone : {contactNumber}
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="footer-menu-item">
                  Email : {contactEmail}
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-line">
        <div className="footer-company-rights">
          {companyName} all rights reserved © 2024
        </div>
        <div className="footer-company-terms">
          <Link className="privacy" to="/PrivacyPolicy">
            Privacy Policy
          </Link>
          <Link className="terms" to="/TandC">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
