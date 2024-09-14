import React from "react";
import './SPM.css'; // Assuming you have the CSS file named MachineDesign.css for styling

export default function SpecialPurposeMachines() {
    return (
        <>
            <div className="spm-top-banner">
                <img
                    className="spm-image"
                    src={"https://picsum.photos/200/300"}
                    alt="banner-image"
                />
                <div className="spm-heading-1">Special Purpose Machines Design Solutions</div>
            </div>
            <div className="spm-container">
                <div className="spm-description">
                    <p>Our Special Purpose Machines (SPMs) are tailored to address specific industrial needs, offering efficient solutions that enhance productivity and operational efficiency. At Vee Technologies, we specialize in designing and developing custom SPMs that integrate seamlessly into your production processes.</p>
                    <p>From conceptualization to implementation, our engineering team ensures that each SPM meets your unique requirements for precision, reliability, and performance. We employ advanced CAD modeling and simulation tools to optimize design and functionality, providing you with robust solutions that streamline manufacturing operations.</p>
                </div>
                <div className="spm-services">
                    <p><strong>Key aspects of our Special Purpose Machines services include:</strong></p>
                    <ul className="spm-list">
                        <li className="spm-list-item">Customized SPM design and prototyping</li>
                        <li className="spm-list-item">Mechanical and electrical integration</li>
                        <li className="spm-list-item">CAD modeling and simulation for performance optimization</li>
                        <li className="spm-list-item">Automation and control system integration</li>
                        <li className="spm-list-item">Functional testing and validation</li>
                        <li className="spm-list-item">Compliance with industry standards and safety regulations</li>
                    </ul>
                </div>
                <div className="spm-footer">
                    <p>Partner with us to transform your industrial requirements into tailored Special Purpose Machines that drive efficiency and innovation. Our expertise in SPM design ensures that your operations benefit from reliable and optimized solutions, enhancing your competitive edge in the market.</p>
                    <p>Contact us today to explore how our Special Purpose Machines services can elevate your production capabilities and achieve your business objectives.</p>
                </div>
            </div>
        </>
    );
}
