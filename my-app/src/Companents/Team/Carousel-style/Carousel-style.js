// src/App.js
import React, { useState } from 'react';
import '../Carousel.css';
import { Link } from 'react-router-dom';
import imgOksana from '../../../assets/Oksana_3x4.png'
import imgVera from '../../../assets/Vera_3x4.jpg'
import imgEkaterina from '../../../assets/Ekaterina_3x4.jpg'


const slidesData = [
  {
    image: imgOksana,
    text1: 'Топ-стилист',
    text2: 'Оксана',
    text3: 'Опыт работы: 15 лет',
    text4: 'Профессионально подберет форму стрижки, посоветует модные направления, а также опытный специалист по стойкому выпрямлению волос',
    href:'/oksana-makalkina'
  },
  {
    image: imgVera,
    text1: 'Топ-стилист',
    text2: 'Вера Марычева',
    text3: 'Опыт работы: 20 лет',
    text4: 'Опытный мастер, обладающий более чем 20-летним стажем в профессии. Воплотит ваши пожелания и внесет в образ модные «фишки» и тренды. Прошла обучение в самых престижных мировых школах: VidalSassoon, UweBreuer, Doloresи др.',
    href:'/vera-marycheva'
  },
  {
    image: imgEkaterina,
    text1: 'Топ-стилист',
    text2: 'Екатерина Лосева',
    text3: 'Опыт работы: 20 лет',
    text4: 'Slide 4 Text',
    href:'/ekaterina-loseva'
  },
];

const CarouselStyle = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="carousel">
      <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slide">
            <div className="content">
              <div className="image">
                <img src={slide.image} alt={`Slide ${index + 1}`}/>
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
              <Link to={slide.href} className="nav-link">
                <button className='order-button'>Подробнее</button>
              </Link>
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



export default CarouselStyle;
