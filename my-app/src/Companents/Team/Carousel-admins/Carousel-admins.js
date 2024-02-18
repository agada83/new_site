// src/App.js
import React, { useState } from 'react';
import '../Carousel.css';
import imgIgul from '../../../assets/Igul_3x4.jpg'
import imgDanila from '../../../assets/Danila_3x4.jpg'


const slidesData = [
  {
    image: imgIgul,
    text1: 'Администратор',
    text2: 'Айгуль',
    text3: 'Опыт работы: 5 лет',
    text4: 'Обладает отличными коммуникативными навыками, что позволяет ей эффективно взаимодействовать с коллегами и клиентами, обеспечивая быстрое решение вопросов и качественное обслуживание',
  },
  {
    image: imgDanila,
    text1: 'Администратор',
    text2: 'Данила',
    text3: 'Опыт работы: ? лет',
    text4: '???',
  },
];

const CarouselAdmins = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="carousel">
      <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slide">
            <div className="content">
              <div className="image">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
              <div className="text">
                <div className='obrezka2'>
                  <p className='bold'>{slide.text1}</p>
                  <p>{slide.text2}</p>
                  <p>{slide.text3}</p>
                  <p>{slide.text4}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <div className="dots">
          {slidesData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



export default CarouselAdmins;
