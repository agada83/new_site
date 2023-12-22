import React, { useState } from 'react';
import './Carousel.css'; // Подключаем файл со стилями

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Массив с группами элементов карусели
  const items = [
    [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
    [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
    [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((_, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
          >
            {items[index].map((image, i) => (
              <div key={i} className="carousel-content">
                <img src={image} alt={`Image ${i}`} className="carousel-image" />
                <div className="text-wrapper">
                  <p>Текст под изображением</p>
                  <button>Кнопка</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
