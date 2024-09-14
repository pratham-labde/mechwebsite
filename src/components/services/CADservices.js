import React from "react";
import "./CADservices.css";
import { companyName } from "../variables.js";
import ServiceCarousel from "./Servicecarousel.js";

export default function CADservices() {
  const imagesList1 = [
    {
      url: "https://www.html-code-generator.com/images/slider/1.png",
      alt: "",
    },
    {
      url: "https://www.html-code-generator.com/images/slider/2.png",
      alt: "",
    },
    {
        url: "https://www.html-code-generator.com/images/slider/3.png",
        alt: "",
      },
      {
        url: "https://www.html-code-generator.com/images/slider/4.png",
        alt: "",
      },
      
    // Add more images as needed
  ];


  return (
    <>
      <div className="container-services">
        <div className="2d-cad-drw">
          <h1>2D CAD drawing</h1>
          <div className="sub-container-service">
            <div className="service-description">
              <section className="services-section">
                <p>
                &emsp; We specialize in converting your ideas and concepts into
                  highly accurate 2D CAD drawings. Our industry-aligned CAD
                  drafting and drawing services cover a wide range of needs,
                  including part drawings, assembly drawings, production
                  drawings, and more. This is backed by a team of skilled,
                  qualified, and experienced CAD professionals equipped with the
                  latest tools and technology.<br/>&emsp;  We utilize advanced softwares to ensure precision and
                  adherence to industry standards in every drawing. Whether you
                  require detailed part drawings for manufacturing,
                  comprehensive assembly drawings for project planning, or
                  precise production drawings for quality control, we deliver
                  solutions that meet your specific requirements.
                </p>
                <h3>Why to choose our service?</h3>
                <ul id="services">
                  <li>
                    <strong>Accurate 2D CAD Drawings</strong>
                  </li>
                  <li>
                    <strong>Qualified CAD Professionals</strong>
                  </li>
                  <li>
                    <strong>Advanced Tools and Technology</strong>
                  </li>
                  <li>
                    <strong>Quick Turnaround</strong>
                  </li>
                  <li>
                    <strong>Cost-effective Solutions</strong>
                  </li>
                  <li>
                    <strong>Customized Services</strong>
                  </li>
                </ul>
              </section>
            </div>
            <ServiceCarousel imagesList={imagesList1} />
          </div>
        </div>
        <div id="3d-cad-mdl" className="3d-cad-mdl">
          <h1>CAD Modeling</h1>
          <div className="sub-container-service">
            <div className="service-description">
              <section className="services-section">
                <p>
                &emsp; We excel in 3D CAD modeling, offering comprehensive services
                  in part modeling, assembly modeling, and dynamic animation.
                  With expertise spanning Mechanical, Electrical, Architectural,
                  and other specialized domains, we leverage advanced software
                  to create detailed and functional 3D models. Our part modeling services focus on
                  creating precise and manufacturable components, ensuring
                  compatibility with your specific design requirements. <br/>&emsp; In
                  assembly modeling, we seamlessly integrate individual parts
                  into cohesive assemblies, optimizing fit, function, and
                  manufacturability. For dynamic visualization and simulation,
                  our animation services bring your designs to life, showcasing
                  functionality and interaction in realistic environments.
                  Whether for product development, architectural visualization,
                  or instructional purposes, our 3D CAD modeling capabilities
                  enhance project understanding and efficiency.
                </p>
                <h3>Why to choose our service?</h3>
                <ul id="services">
                  <li>
                    <strong>
                      Expertise in Part Modeling, Assembly Modeling, and
                      Animation
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Utilization of Leading Software for Detailed and
                      Functional Models
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Precision and Compatibility with Design Requirements
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Seamless Integration of Parts into Cohesive Assemblies
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Enhanced Project Understanding and Efficiency
                    </strong>
                  </li>
                  <li>
                    <strong>Commitment to Quality and Innovation</strong>
                  </li>
                </ul>
              </section>
            </div>
            <ServiceCarousel imagesList={imagesList1} />
          </div>
        </div>
        <div className="paper-cad-drw">
          <h1>Paper to CAD</h1>
          <div className="sub-container-service">
            <div className="service-description">
              <section className="services-section">
                <p>
                &emsp; We specialize in a wide array of Paper to CAD Conversion
                  Services. Our services encompass PDF to DWG conversion, hand
                  sketch to CAD conversion, and image to CAD conversion,
                  meticulously executed with precision and offered at highly
                  competitive rates.We ensure utmost quality and accuracy in
                  every conversion project.
                  <br /> &emsp; Simply provide us with a scanned image, and we
                  guarantee to deliver precise CAD drawings and designs. Our
                  success in this field is underpinned by our advanced
                  technology and infrastructure, enabling us to deliver
                  unmatched paper to CAD conversion services at exceptionally
                  competitive rates.
                </p>
                <h3>Why to choose our service?</h3>
                <ul id="services">
                  <li>
                    <strong>Complete Range of Conversion Services</strong>
                  </li>
                  <li>
                    <strong>Precision and Accuracy</strong>
                  </li>
                  <li>
                    <strong>
                      Competitive Rates Expertise in Various Types of Drawings
                    </strong>
                  </li>
                  <li>
                    <strong>Simple Requirements for Input</strong>
                  </li>
                  <li>
                    <strong>High-Quality Output</strong>
                  </li>
                  <li>
                    <strong>Customized Services</strong>
                  </li>
                </ul>
              </section>
            </div>
            <ServiceCarousel imagesList={imagesList1} />
          </div>
        </div>
        <div className="3s-mdl-render">
          <h1>Rendering</h1>
          <div className="sub-container-service">
            <div className="service-description">
              <section className="services-section">
                <p>
                &emsp; We specialize in 3D rendering and animation services tailored
                  for mechanical engineering applications. Using cutting-edge
                  software like Autodesk 3ds Max, SolidWorks Visualize, and
                  KeyShot, we transform mechanical designs into highly realistic
                  visual representations. Our 3D rendering services provide
                  photorealistic images of mechanical components and assemblies.
                  Whether for product visualization, marketing materials, or
                  design reviews, our renderings highlight every detail with
                  precision and clarity. <br/>&emsp; In addition to rendering, our animation
                  services bring mechanical designs to life with dynamic
                  movement and functionality. From assembly animations to
                  showcasing product features, we ensure that the motion and
                  interactions are depicted realistically and accurately. We
                  combine technical expertise with creative flair to deliver
                  compelling 3D renderings and animations that enhance
                  understanding, communication, and engagement for mechanical
                  engineering projects.
                </p>
                <h3>Why to choose our service?</h3>
                <ul id="services">
                  <li>
                    <strong>
                      Expertise in Photorealistic 3D Rendering for Mechanical
                      Components
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Dynamic Animation to Showcase Mechanical Functionality
                    </strong>
                  </li>
                  <li>
                    <strong>Precision and Detail-Oriented Approach</strong>
                  </li>
                  <li>
                    <strong>
                      Tailored Solutions for Mechanical Engineering Applications
                    </strong>
                  </li>
                  <li>
                    <strong>Effective Communication of Design Concepts</strong>
                  </li>
                  <li>
                    <strong>
                      Enhanced Visualization for Product Marketing
                    </strong>
                  </li>
                </ul>
              </section>
            </div>
            <ServiceCarousel imagesList={imagesList1} />
          </div>
        </div>
      </div>
    </>
  );
}
