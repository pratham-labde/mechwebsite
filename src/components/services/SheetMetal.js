import React from "react";
import './SheetMetal.css'; // Assuming you have the CSS file named MachineDesign.css for styling

export default function SheetMetalDesign() {
    return (
        <>
            <div className="sht-top-banner">
                <img
                    className="sht-image"
                    src={"https://picsum.photos/200/300"}
                    alt="banner-image"
                />
                <div className="sht-heading-1">Sheet Metal Design Services</div>
            </div>
            <div className="sht-container">
                <div className="sht-description">
                    <p>Our Sheet Metal Design Services offer comprehensive solutions for designing and fabricating precise sheet metal components. We specialize in creating custom sheet metal parts that meet your specific requirements for functionality and aesthetics.</p>
                    <p>From initial concept development to final production, our engineering team ensures that each design is optimized for manufacturability and cost-efficiency. We utilize advanced CAD software and simulation tools to validate designs, ensuring accuracy and performance across various applications.</p>
                </div>
                <div className="sht-services">
                    <p><strong>Key aspects of our Sheet Metal Design services include:</strong></p>
                    <ul className="sht-list">
                        <li className="sht-list-item">Custom sheet metal component design</li>
                        <li className="sht-list-item">Prototype development and testing</li>
                        <li className="sht-list-item">Material selection and optimization</li>
                        <li className="sht-list-item">CAD modeling and simulation</li>
                        <li className="sht-list-item">Manufacturability assessment</li>
                        <li className="sht-list-item">Quality control and inspection</li>
                    </ul>
                </div>
                <div className="sht-footer">
                    <p>Partner with us to transform your sheet metal design concepts into reality. Whether you require intricate components or large-scale production runs, our expertise in sheet metal design ensures high-quality solutions that exceed your expectations.</p>
                    <p>Contact us today to discuss how our Sheet Metal Design services can enhance your product development and manufacturing capabilities.</p>
                </div>
            </div>
        </>
    );
}
