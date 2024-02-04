// src/App.js
import React, { useState } from 'react';
import './TSCarousel.css';
import hairCut from '../../assets/serviceImg/haircut.png'
import coloring from '../../assets/serviceImg/coloring.png'


const slidesData = [
  {
    image1: hairCut,
    image2: coloring,
    text1: 'Стрижки',
    text2: 'Окрашивание',
    text3: 'СПА уходы',
    price1: 'от 2800 руб',    
    price2: 'от 3800 руб',    
    price3: 'от 4800 руб',    
},
{
  image1: hairCut,
  image2: coloring,
  text1: 'Стрижки',
  text2: 'Окрашивание',
  text3: 'СПА уходы',
  price1: 'от 2800 руб',    
  price2: 'от 3800 руб',    
  price3: 'от 4800 руб',    
},

];
const CarouselStyle = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const redirectToPage = () => {
      // Укажите URL страницы, на которую вы хотите перейти
      const targetPageUrl = "#registration";
      
      // Переносим пользователя на указанную страницу
      window.location.href = targetPageUrl;
    };
    return (
      <div className="tscarousel">
        <div className="tsslides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slidesData.map((slide, index) => (
            <div key={index} className="tsslide">
                <div className="tscontent">
                    <div className='item'>
                        <img src={slide.image1} alt={`Slide ${index + 1}`}/>
                        <a>{slide.text1}</a>
                        <a>{slide.price1}</a>
                        <button onClick={redirectToPage}>Записаться</button>
                    </div>
                    <div className='item'>
                        <img src={slide.image2} alt={`Slide ${index + 1}`}/>
                        <a>{slide.text2}</a>
                        <a>{slide.price2}</a>
                        <button onClick={redirectToPage}>Записаться</button>
                    </div>
                    <div className='item'>
                        <img src={slide.image1} alt={`Slide ${index + 1}`}/>
                        <a>{slide.text3}</a>
                        <a>{slide.price3}</a>
                        <button onClick={redirectToPage}>Записаться</button>
                    </div>
                </div>
            </div>
          ))}
        </div>
        <div className="tsnavigation">
          <div className="tsdots">
            {slidesData.map((_, index) => (
              <span
                key={index}
                className={`tsdot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };


export default CarouselStyle;
