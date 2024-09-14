import React from "react";
import './Reverseeng.css'; // Assuming you have the CSS file named MachineDesign.css for styling

export default function ReverseEngineering() {
    return (
        <>
            <div className="rengg-top-banner">
                <img
                    className="rengg-image"
                    src={"https://picsum.photos/200/300"}
                    alt="banner-image"
                />
                <div className="rengg-heading-1">Reverse Engineering Services</div>
            </div>
            <div className="rengg-container">
                <div className="rengg-description">
                    <p>Our Reverse Engineering Services provide comprehensive solutions for analyzing and recreating existing products or components. We specialize in leveraging advanced technologies and methodologies to reverse engineer complex parts and assemblies.</p>
                    <p>From capturing detailed measurements to creating accurate CAD models, our engineering team ensures that your designs meet exact specifications and performance requirements. Whether you need to reproduce obsolete parts, improve product performance, or enhance manufacturing efficiency, we deliver tailored solutions that drive innovation.</p>
                </div>
                <div className="rengg-services">
                    <p><strong>Key aspects of our Reverse Engineering services include:</strong></p>
                    <ul className="rengg-list">
                        <li className="rengg-list-item">3D scanning and digitization</li>
                        <li className="rengg-list-item">CAD modeling and design validation</li>
                        <li className="rengg-list-item">Prototype development and testing</li>
                        <li className="rengg-list-item">Materials analysis and selection</li>
                        <li className="rengg-list-item">Manufacturability assessment</li>
                        <li className="rengg-list-item">Documentation and technical reports</li>
                    </ul>
                </div>
                <div className="rengg-footer">
                    <p>Partner with us to unlock the potential of your existing products through our Reverse Engineering Services. Our commitment to accuracy and innovation ensures that your designs are optimized for performance and reliability, empowering your business to stay competitive in the market.</p>
                    <p>Contact us today to discuss how our Reverse Engineering services can support your product development goals and drive continuous improvement.</p>
                </div>
            </div>
        </>
    );
}
