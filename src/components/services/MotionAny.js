import React from "react";
import './MotionAny.css'; // Assuming you have the CSS file named MachineDesign.css for styling

export default function MotionAnalysis() {
    return (
        <>
            <div className="mo-top-banner">
                <img
                    className="mo-image"
                    src={"https://picsum.photos/200/300"}
                    alt="banner-image"
                />
                <div className="mo-heading-1">Motion Analysis of Machines</div>
            </div>
            <div className="mo-container">
                <div className="mo-description">
                    <p>Our Motion Analysis Services utilize advanced software such as SolidWorks to simulate and optimize the movement of mechanical systems. We specialize in conducting detailed motion studies to analyze and validate machine performance under various operating conditions.</p>
                    <p>From dynamic simulations to kinematic analysis, our engineering team ensures that your machine designs meet functional requirements for efficiency, safety, and reliability. We leverage sophisticated CAD software to visualize and refine motion paths, enabling you to make informed decisions during product development.</p>
                </div>
                <div className="mo-services">
                    <p><strong>Key aspects of our Motion Analysis services include:</strong></p>
                    <ul className="mo-list">
                        <li className="mo-list-item">Dynamic simulations and stress analysis</li>
                        <li className="mo-list-item">Kinematic analysis and motion optimization</li>
                        <li className="mo-list-item">Simulation of complex mechanical systems</li>
                        <li className="mo-list-item">Visualization of motion paths and trajectories</li>
                        <li className="mo-list-item">Impact analysis and virtual testing</li>
                        <li className="mo-list-item">Integration with CAD modeling for design validation</li>
                    </ul>
                </div>
                <div className="mo-footer">
                    <p>Partner with us to enhance the performance and reliability of your machines through our Motion Analysis Services. By simulating real-world conditions and optimizing mechanical behavior, we help you achieve superior product designs and operational excellence.</p>
                    <p>Contact us today to explore how our Motion Analysis services can streamline your product development process and ensure optimal machine performance.</p>
                </div>
            </div>
        </>
    );
}
