import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import the corresponding CSS file
const imagesList = [
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
  {
    url: "https://www.html-code-generator.com/images/slider/5.png",
    alt: "",
  },
];
const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % imagesList.length);
  };

  const prevSlide = () => {
    const newIndex =
      slideIndex - 1 < 0 ? imagesList.length - 1 : slideIndex - 1;
    setSlideIndex(newIndex);
  };

  return (
    <div id="hcg-slider-1" className="hcg-slider">
      <div className="hcg-slide-container">
        <div className="hcg-slider-body">
          {imagesList.map((image, index) => (
            <a
              key={index}
              className={`hcg-slides animated ${
                index === slideIndex ? "fadeIn" : ""
              }`}
              style={{ display: index === slideIndex ? "flex" : "none" }}
            >
              <img src={image.url} alt={image.alt} />
            </a>
          ))}
        </div>
      </div>
      <div className="hcg-slide-dot-control">
        {imagesList.map((_, index) => (
          <a
            key={index}
            href="#"
            className={`hcg-slide-dot ${
              index === slideIndex ? "dot-active" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="hcg-navigation">
        <button className="hcg-prev" onClick={prevSlide}>
          &larr;
        </button>
        <button className="hcg-next" onClick={nextSlide}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
