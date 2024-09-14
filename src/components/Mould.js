import React from "react";
import './Mould.css'; // Assuming you have the CSS file named MachineDesign.css for styling

export default function MoldDesign() {
    return (
        <>
            <div className="mld-top-banner">
                <img
                    className="mld-image"
                    src={"https://picsum.photos/200/300"}
                    alt="banner-image"
                />
                <div className="mld-heading-1">Mold Design Services</div>
            </div>
            <div className="mld-container">
                <div className="mld-description">
                    <p>Our Mold Design Services encompass the entire process of creating efficient and precise molds for manufacturing. We specialize in designing custom molds that meet your specific production requirements, ensuring high-quality and cost-effective solutions.</p>
                    <p>From initial concept to final production, our engineering team utilizes advanced CAD/CAM software to develop molds that optimize cycle times, reduce waste, and enhance product consistency. We focus on incorporating innovative design techniques and materials to deliver molds that exceed industry standards.</p>
                </div>
                <div className="mld-services">
                    <p><strong>Key aspects of our Mold Design services include:</strong></p>
                    <ul className="mld-list">
                        <li className="mld-list-item">Custom mold design and prototyping</li>
                        <li className="mld-list-item">Injection molding simulation and analysis</li>
                        <li className="mld-list-item">CAD/CAM modeling and toolpath generation</li>
                        <li className="mld-list-item">Material selection and compatibility</li>
                        <li className="mld-list-item">Optimization for manufacturability and cost-efficiency</li>
                        <li className="mld-list-item">Quality control and mold testing</li>
                    </ul>
                </div>
                <div className="mld-footer">
                    <p>Partner with us to streamline your manufacturing processes with our Mold Design Services. Whether you require molds for plastics, metals, or composites, our expertise ensures that your production goals are met with precision and reliability.</p>
                    <p>Contact us today to discuss how our Mold Design services can optimize your product development cycle and enhance your competitive advantage in the market.</p>
                </div>
            </div>
        </>
    );
}
