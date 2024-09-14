import './Servicecarousel.css'
import React, { useState, useEffect } from 'react';

const Carousel = ({ imagesList }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [imagesList]);

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % imagesList.length);
  };

  const prevSlide = () => {
    const newIndex = slideIndex - 1 < 0 ? imagesList.length - 1 : slideIndex - 1;
    setSlideIndex(newIndex);
  };

  return (
    <div id="cad-service-slider-1" className="cad-service-slider">
      <div className="cad-service-slide-container">
        <div className="cad-service-slider-body">
          {imagesList.map((image, index) => (
            <a
              key={index}
              className={`cad-service-slides animated ${index === slideIndex ? 'fadeIn' : ''}`}
              style={{ display: index === slideIndex ? 'flex' : 'none' }}
            >
              <img src={image.url} alt={image.alt} />
            </a>
          ))}
        </div>
      </div>
      <div className="cad-service-slide-dot-control">
        {imagesList.map((_, index) => (
          <a
            key={index}
            href="#"
            className={`cad-service-slide-dot ${index === slideIndex ? 'dot-active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="cad-service-navigation">
        <button className="cad-service-prev" onClick={prevSlide}>
          &larr;
        </button>
        <button className="cad-service-next" onClick={nextSlide}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
