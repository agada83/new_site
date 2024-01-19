// src/App.js
import React, { useState } from 'react';
import './Carousel.css';


const slidesData = [
  {
    image: 'https://placekitten.com/300/200',
    text1: 'Топ-стилист',
    text2: 'Оксана',
    text3: 'Опыт работы: 15 лет',
    text4: 'Профессионально подберет форму стрижки, посоветует модные направления, а также опытный специалист по стойкому выпрямлению волос',
  },
  {
    image: 'https://placekitten.com/300/201',
    text1: 'Slide 2 Text',
    text2: 'Slide 2 Text',
    text3: 'Slide 3 Text',
    text4: 'Slide 4 Text',
  },
  {
    image: 'https://placekitten.com/300/202',
    text1: 'Slide 3 Text',
    text2: 'Slide 2 Text',
    text3: 'Slide 3 Text',
    text4: 'Slide 4 Text',
  },
];

const Carousel = () => {
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
                <p>{slide.text1}</p>
                <p>{slide.text2}</p>
                <p>{slide.text3}</p>
                <p>{slide.text4}</p>
              </div>
              <button className='order-button'>Записаться</button>
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



export default Carousel;
