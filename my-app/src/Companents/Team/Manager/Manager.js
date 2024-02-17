// src/App.js
import React, { useState } from 'react';
import '../Carousel.css';
import imgOksana from '../../../assets/Oksana.png'
import { Link } from 'react-router-dom';


const slidesData = [
  {
    image: imgOksana,
    text1: 'Топ-стилист',
    text2: 'Оксана',
    text3: 'Опыт работы: 15 лет',
    text4: 'Профессионально подберет форму стрижки, посоветует модные направления, а также опытный специалист по стойкому выпрямлению волос',
    ssilka: '/oksana-123',
  },
  {
    image: 'https://placekitten.com/300/201',
    text1: 'Slide 2 Text',
    text2: 'Slide 2 Text',
    text3: 'Slide 3 Text',
    text4: 'Slide 4 Text',
    ssilka: '/vera-marycheva',
  },
  {
    image: 'https://placekitten.com/300/202',
    text1: 'Slide 3 Text',
    text2: 'Slide 2 Text',
    text3: 'Slide 3 Text',
    text4: 'Slide 4 Text',
    ssilka: '/vera-marycheva',
  },
];

const CarouselStyle = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="carousel-man" style={{marginBottom:'3.4svw'}}>
      <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slide">
            <div className="content">
              <div className="image">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
              <div className="text">
                <div className='obrezka'>
                <p className='bold'>{slide.text1}</p>
                <p>{slide.text2}</p>
                <p>{slide.text3}</p>
                <p>{slide.text4}</p>
                </div>
              </div>
              <div className='obrez-but'>
              <Link to={slide.ssilka}>  
                <button className='order-button'>Записаться</button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default CarouselStyle;
