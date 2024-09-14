import React from "react";
import "./About.css";
import { misionStatement, visionStatement } from "./variables.js";
import visionImage from "./resources/vision.jpg";
import msissionImage from "./resources/mission.jpg";

export default function About() {
  return (
    <>
     <div className="top-banner">
        <img
          className="image"
          src={"https://picsum.photos/200/300"}
          alt="banner-image"
        />
        <h1 className="text-overlay">
          Redefining Innovation Through Mechanical Design Excellence.
        </h1></div>
      <div className="what-we-do">
        <h1>What We Do ?</h1>
        <ol className="what-we-do-list">
          <li>
            Special-Purpose Machines: Tailored engineering solutions for unique
            needs.
          </li>
          <li>
            Advanced CAD Modeling: Precise and innovative designs.
            <li>
              Mechanical Analysis: In-depth evaluation of mechanical systems.
            </li>
            <li>FEA Simulation: Accurate and reliable simulations.</li>
          </li>
        </ol>
      </div>
      <div class="container-about">
        <div className="sub-container1">
          <div class="Vision">Vision</div>
          <div className="vision-container">
            <div class="vision-img">
              <img className="vision-logo" src={visionImage} alt="Logo" />
            </div>
            <div class="Vision-statement">{visionStatement}</div>
          </div>
        </div>
        <div className="sub-conatainer2">
          <div class="Mission">Mission</div>
          <div className="mission-container">
            <div class="mission-img">
              <img className="mission-logo" src={msissionImage} alt="Logo" />
            </div>
            <div class="Mission-statement">{misionStatement}</div>
          </div>
        </div>
      </div>
    </>
  );
}
