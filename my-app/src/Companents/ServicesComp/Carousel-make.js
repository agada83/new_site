// src/App.js
import React, { useState, useEffect } from 'react';
import './Carousel-hair.css';
import hairImg from '../../assets/hair.png'
import { HashLink } from 'react-router-hash-link';
import arrow from '../../assets/arrowbottomImg.png'

const slidesData = [
  {
    image1: hairImg,
    image2: hairImg,
    text1: 'Услуги визажиста',
    text2: 'Услуги бровиста',

  },

];
const slidesDatamb = [
  {
    image: hairImg,
    text: 'Услуги визажиста',
  },
  {
    image: hairImg,
    text: 'Услуги бровиста',
  },
];
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};

const CarouselMake = () => {
  const windowWidth = useWindowWidth();
  const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
    setCurrentSlide(currentSlide === slidesDatamb.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slidesDatamb.length - 1 : currentSlide - 1);
  };
  return (
    <>
      {windowWidth > 768 ? (
    <div className="sc-carousel">
      <div className="sc-slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <div key={index} className="sc-slide">
            <div className="sc-content">
              <div className='sc-item'>
                <img src={slide.image1}/>
                <a>{slide.text1}</a>
                <HashLink to={'/prices'}>
                      <button>Прайс-лист</button>
                </HashLink>
              </div>
              <div className='sc-item'>
                <img src={slide.image2}/>
                <a>{slide.text2}</a>
                <HashLink to={'/prices'}>
                      <button>Прайс-лист</button>
                </HashLink>
              </div>
              <div className='sc-void'>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="sc-navigation">
        <div className="sc-dots">
          {slidesData.map((_, index) => (
            <span
              key={index}
              className={`sc-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div> */}
    </div>
      )
      //________________________________________________________________________
      :
      (
<div className="sc-carousel">
  <div className="sc-slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
    {slidesDatamb.map((slide, index) => (
      <div key={index} className="sc-slide">
        <div className='scmb-item'>
          <img src={slide.image} alt={`Hair ${index}`} />
          <a>{slide.text}</a>
          <HashLink to={'/prices'}>
            <button>Прайс-лист</button>
          </HashLink>
        </div>
      </div>
    ))}
  </div>
  <button className="sc-prevslide" onClick={prevSlide}><img src={arrow}/></button>
  <button className="sc-nextslide" onClick={nextSlide}><img src={arrow}/></button>

  <div className="sc-navigation">
    <div className="sc-dots">
      {slidesDatamb.map((_, index) => (
        <span
          key={index}
          className={`sc-dot ${index === currentSlide ? 'active' : ''}`}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
  </div>
</div>        )}
        </>
      );
    };


export default CarouselMake;
