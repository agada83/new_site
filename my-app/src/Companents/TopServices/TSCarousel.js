// src/App.js
import React, { useState, useEffect } from 'react';
import './TSCarousel.css';
import hairCut from '../../assets/serviceImg/haircut.png'
import coloring from '../../assets/serviceImg/coloring.png'
import { HashLink } from 'react-router-hash-link';
import arrow from '../../assets/arrowbottomImg.png'


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
const slidesDatamb = [

{
  image: hairCut,
  text: 'Стрижки',
  price: 'от 2800 руб',    
},
{
  image: coloring,
  text: 'Окрашивание',
  price: 'от 3800 руб',    
},
{
  image: hairCut,
  text: 'СПА уходы',
  price: 'от 4800 руб',    
},
{
  image: coloring,
  text: 'Стрижки',
  price: 'от 2800 руб',    
},
{
  image: hairCut,
  text: 'Окрашивание',
  price: 'от 3800 руб',    
},
{
  image: coloring,
  text: 'СПА уходы',
  price: 'от 4800 руб',    
},]
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

const CarouselStyle = () => {
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
      <div className="tscarousel">
        <div className="tsslides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slidesData.map((slide, index) => (
            <div key={index} className="tsslide">
                <div className="tscontent">
                    <div className='item'>
                        <img src={slide.image1} alt={`Slide ${index + 1}`}/>
                        <a>{slide.text1}</a>
                        <a>{slide.price1}</a>
                        <HashLink to={'/prices'}>
                          <button>Записаться</button>
                        </HashLink>
                    </div>
                    <div className='item'>
                        <img src={slide.image2} alt={`Slide ${index + 1}`}/>
                        <a>{slide.text2}</a>
                        <a>{slide.price2}</a>
                        <HashLink to={'/prices'}>
                          <button>Записаться</button>
                        </HashLink>
                    </div>
                    <div className='item'>
                        <img src={slide.image1} alt={`Slide ${index + 1}`}/>
                        <a>{slide.text3}</a>
                        <a>{slide.price3}</a>
                        <HashLink to={'/prices'}>
                          <button>Записаться</button>
                        </HashLink>
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
            )
            //________________________________________________________________________
            :
            (
              <div className="tsmbcarousel">
              <div className="tsmbslides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slidesDatamb.map((slide, index) => (
                  <div key={index} className="tsmbslide">
                      <div className="tsmbcontent">
                          <div className='itemmb'>
                              <img src={slide.image} alt={`Slide ${index + 1}`}/>
                              <a>{slide.text}</a>
                              <a>{slide.price}</a>
                              <HashLink to={'/prices'}>
                                <button>Записаться</button>
                              </HashLink>
                          </div>
                      </div>
                  </div>
                ))}
              </div>
              <button className="ts-prevslide" onClick={prevSlide}><img src={arrow}/></button>
              <button className="ts-nextslide" onClick={nextSlide}><img src={arrow}/></button>

              <div className="tsnavigation">
                <div className="tsmbdots">
                  {slidesDatamb.map((_, index) => (
                    <span
                      key={index}
                      className={`tsmbdot ${index === currentSlide ? 'active' : ''}`}
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


export default CarouselStyle;
