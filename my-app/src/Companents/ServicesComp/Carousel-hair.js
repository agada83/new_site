// src/App.js
import React, { useState } from 'react';
import './Carousel-hair.css';
import hairImg from '../../assets/hair.png'


const slidesData = [
  {
    image1: hairImg,
    image2: hairImg,
    image3: hairImg,
    text1: 'Укладки',
    text2: 'Стрижки',
    text3: 'Окрашивания',
  },
  {
    image1: hairImg,
    image2: hairImg,
    image3: hairImg,
    text1: 'Рассветление',
    text2: 'Элюмирование',
    text3: 'Лечение и спа',
  },
  {
    image1: hairImg,
    image2: hairImg,
    image3: hairImg,
    text1: 'Трихология',
    text2: 'Техники',
    text3: 'Выпрямление',
  },

];

const CarouselHair = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const redirectToPage = () => {
    // Укажите URL страницы, на которую вы хотите перейти
    const targetPageUrl = "/prices";
    
    // Переносим пользователя на указанную страницу
    window.location.href = targetPageUrl;
  };
  return (
    <div className="sc-carousel">
      <div className="sc-slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <div key={index} className="sc-slide">
            <div className="sc-content">
              <div className='sc-item'>
                <img src={slide.image1}/>
                <a>{slide.text1}</a>
                <button  onClick={redirectToPage}>Прайс-лист</button>
              </div>
              <div className='sc-item'>
                <img src={slide.image2}/>
                <a>{slide.text2}</a>
                <button  onClick={redirectToPage}>Прайс-лист</button>
              </div>
              <div className='sc-item'>
                <img src={slide.image3}/>
                <a>{slide.text3}</a>
                <button  onClick={redirectToPage}>Прайс-лист</button>
              </div>
            </div>
          </div>
        ))}
        <div key={4} className="sc-slide">
            <div className="sc-content">
              <div className='sc-item'>
                <img src={hairImg}/>
                <a>Завивка</a>
                <button  onClick={redirectToPage}>Прайс-лист</button>
              </div>
              <div className='sc-item'>
                <img src={hairImg}/>
                <a>Доп услуги</a>
                <button  onClick={redirectToPage}>Прайс-лист</button>
              </div>

            </div>
          </div>
      </div>
      <div className="sc-navigation">
        <div className="sc-dots">
          {slidesData.map((_, index) => (
            <span
              key={index}
              className={`sc-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
              <span
              className={`sc-dot ${3 === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(3)}
            />
        </div>
      </div>
    </div>
  );
};



export default CarouselHair;
