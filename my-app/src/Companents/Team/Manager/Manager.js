// src/App.js
import React, { useState } from 'react';
import '../Carousel.css';
import imgOlga from '../../../assets/Olga_3x4.jpg'
import { Link } from 'react-router-dom';


const slidesData = [
  {
    image: imgOlga,
    text1: 'Управляющий',
    text2: 'Ольга',
    text3: 'Опыт работы: 15 лет',
    text4: 'Уделяет большое внимание обучению и развитию персонала, мотивирует сотрудников на достижение общих целей, поддерживает их профессиональный рост и развитие',
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
    </div>
  );
};



export default CarouselStyle;
