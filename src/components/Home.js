import React from "react";
import ServicesCard, { services } from "./ServicesCards"; // Adjust the path as per your actual file structure
import "./Home.css";
import { companyName } from "./variables";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

function Home() {
    return (
    <div className="container-home">
      <div className="top-banner">
        <img
          className="image"
          src={"https://picsum.photos/200/300"}
          alt="banner-image"
        />
        <h1 className="text-overlay">
          Redefining Innovation Through Mechanical Design Excellence.
        </h1>
        <button className="catalogue-btn">View Catalogue</button>
      </div>
      <div className="introduction">
        <div className="intro-heading">
          We are <br />
          {companyName} <br />
          <img src={""} alt="logo" />
        </div>
        <div className="intro-content">
          <p>
            &emsp; Welcome to {companyName}, where engineering meets innovation.
            We specialize in special-purpose machines, advanced CAD modeling,
            mechanical analysis, and FEA simulation.
            <br /> &emsp;From concept to prototype, our dedicated engineers
            deliver excellence in every project. At {companyName}, we turn
            challenges into tangible realities, driving industries forward.{" "}
            <br />
            Let us transform your vision into impeccably engineered solutions.
          </p>
        </div>
      </div>
      <h3 className="service-header">Our services</h3>
      <div className="services">
        <ServicesCard services={services} />
      </div>
      <h3 className="projects-header">Our Projects</h3>
      <div className="project-carousel">
        {Carousel()}
      </div>
      <div className="why-choose-us">
        <ul className="choice-content">
          <li>Expertise in special-purpose machines</li>
          <li>Cutting-edge CAD modeling and FEA simulation</li>
          <li>Comprehensive end-to-end mechanical design services</li>
          <li>Experienced and dedicated team</li>
          <li>Client-centered approach</li>
        </ul>
        <h2 className="choice">
          Why to <br />
          Choose Us ?
        </h2>
      </div>
    </div>
  );
}

export default Home;
