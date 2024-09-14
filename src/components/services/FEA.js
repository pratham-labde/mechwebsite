import React from "react"
import './FEA.css'

export default function FEA(){
    return(
        <>
        <div className="fea-top-banner">
        <img
          className="fea-image"
          src={"https://picsum.photos/200/300"}
          alt="banner-image"
        />
        <div class="fea-heading-1">Finite Element Analysis (FEA) Services</div>
        </div>
        <div class="fea-container">
        <div class="fea-description">
            <p>Finite Element Analysis (FEA) is a crucial tool for evaluating the durability, dynamics, and strength of various engineering projects. It plays a pivotal role in assessing design modifications aimed at enhancing manufacturing efficiency or improving performance. Our FEA services are designed to support comprehensive design optimization, failure analysis, and product development. Utilizing advanced modeling software, we meticulously simulate real-world service conditions to validate material choices and design strategies.</p>
            <p>Our FEA capabilities encompass a wide range of analyses including stress, strain, and deformation assessments, structural fatigue analysis, thermal stress evaluations, and simulations for shock, drop, and fluid flow scenarios. We leverage 3D models, theoretical insights, and sophisticated analysis tools to conduct thorough evaluations of your products and designs. This allows us to explore their behavior under normal, regression, and stress-induced conditions, providing invaluable insights into their performance characteristics.</p>
        </div>
        <video src="https://youtu.be/GHjopp47vvQ?si=EkKKUP2Ytpc06dJG"/>
        <div class="fea-services">
            <p><strong>Key aspects of our FEA services include:</strong></p>
            <ul class="fea-list">
                <li class="fea-list-item">Stress, strain & deformations: Evaluating structural integrity under various loads.</li>
                <li class="fea-list-item">Structural fatigue analysis: Predicting component lifespan and failure points.</li>
                <li class="fea-list-item">Thermal stresses: Assessing temperature-induced deformations and material response.</li>
                <li class="fea-list-item">Shock and drop testing: Simulating impact scenarios to ensure product resilience.</li>
                <li class="fea-list-item">Fluid flow & pressure tests: Analyzing fluid dynamics for optimal performance.</li>
                <li class="fea-list-item">Fatigue analysis: Predicting material fatigue and longevity.</li>
                <li class="fea-list-item">Motion studies: Analyzing dynamic movements and interactions.</li>
                <li class="fea-list-item">Automotive crash analysis: Assessing vehicle safety and structural integrity during collisions.</li>
            </ul>
        </div>
        <div class="fea-footer">
            <p>As your dedicated engineering analysis partner, we deliver precise calculations, insightful evaluations, and accurate models to guide informed decision-making. Our experienced engineers offer tailored solutions based on detailed analyses, accompanied by robust recommendations for enhancing product performance and reliability. With a commitment to quality and innovation, we are equipped to address complex analysis requirements across diverse industries.</p>
            <p>Partner with us to leverage our expertise in FEA and drive the success of your engineering endeavors through meticulous analysis and strategic insights.</p>
        </div>
    </div>
        </>
    )
}