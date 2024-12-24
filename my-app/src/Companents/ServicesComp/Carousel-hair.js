import React, { useState, useEffect } from 'react';
import './Carousel-hair.css';
import coloringImg from '../../assets/serviceImg/servises/coloring.jpeg';
import curlsImg from '../../assets/serviceImg/servises/curls.jpeg';
import eluminationImg from '../../assets/serviceImg/servises/elumination.jpeg';
import straighteningIng from '../../assets/serviceImg/servises/straightening.jpeg';

import haircutImg from '../../assets/serviceImg/servises/haircut.jpeg';
import lighteningImg from '../../assets/serviceImg/servises/lightening.jpeg';
import stylingImg from '../../assets/serviceImg/servises/styling.jpeg';
import techniquesImg from '../../assets/serviceImg/servises/techniques.jpeg';
import treatmentImg from '../../assets/serviceImg/servises/treatment.jpeg';
import trichologyImg from '../../assets/serviceImg/servises/trichology.jpeg';
import { HashLink } from 'react-router-hash-link';
import arrow from '../../assets/arrowbottomImg.png'

const slidesData = [
  {
    image1: haircutImg,
    image2: curlsImg,
    image3: eluminationImg,
    text1: 'Стрижки',
    text2: 'Укладки',
    text3: 'Элюмирование',
  },
  {
    image1: treatmentImg,
    image2: trichologyImg,
    image3: stylingImg,
    text1: 'Лечение и спа',
    text2: 'Трихология',
    text3: 'Химия',
  },
  {
    image1: coloringImg,
    image2: lighteningImg,
    image3: techniquesImg,
    text1: 'Окрашивания',
    text2: 'Рассветление',
    text3: 'Техники',
  },
];
const slidesDatamb = [
  {
    image: haircutImg,
    text:'Стрижки',
  },
  {
    image: curlsImg,
    text:'Укладки',
  },
  {
    image: eluminationImg,
    text:'Элюмирование',
  },
  {
    image: treatmentImg,
    text:'Лечение и спа',
  },
  {
    image: trichologyImg,
    text:'Трихология',
  },
  {
    image: stylingImg,
    text:'Химия',
  },
  {
    image: coloringImg,
    text:'Окрашивания',
  },
  {
    image: lighteningImg,
    text:'Рассветление',
  },
  {
    image: techniquesImg,
    text:'Техники',
  },
  {
    image: straighteningIng,
    text:'Доп услуги',
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

const CarouselHair = () => {
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
                    <img src={slide.image1} alt={`Hair ${index + 1}`} />
                    <a>{slide.text1}</a>
                    <HashLink to={'/prices'}>
                      <button>Прайс-лист</button>
                    </HashLink>
                  </div>
                  <div className='sc-item'>
                    <img src={slide.image2} alt={`Hair ${index + 2}`} />
                    <a>{slide.text2}</a>
                    <HashLink to={'/prices'}>
                      <button>Прайс-лист</button>
                    </HashLink>
                  </div>
                  <div className='sc-item'>
                    <img src={slide.image3} alt={`Hair ${index + 3}`} />
                    <a>{slide.text3}</a>
                    <HashLink to={'/prices'}>
                      <button>Прайс-лист</button>
                    </HashLink>
                  </div>
                </div>
              </div>
            ))}
            <div key={3} className="sc-slide">
                <div className="sc-content">
            <div className='sc-item'>
                    <img src={straighteningIng} alt={`Hair`} />
                    <a>Доп услуги</a>
                    <HashLink to={'/prices'}>
                      <button>Прайс-лист</button>
                    </HashLink>
                  </div>
                  <div className='sc-void'>
                  </div>
                  <div className='sc-void'>
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
              <span className={`sc-dot ${3 === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(3)} />
            </div>
          </div>
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
</div>
        )}
    </>
  );
};

export default CarouselHair;
