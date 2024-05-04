// src/App.js
import React, { useState, useEffect  } from 'react';
import '../Carousel.css';
import imgDanila from '../../../assets/Danila_3x4.jpg'
import img2Danila from '../../../assets/Danila_2x3.jpg'


const slidesData = [
  {
    image: imgDanila,
    image2: img2Danila,
    text1: 'Администратор',
    text2: 'Данила',
    text3: 'Опыт работы: 5 лет',
    text4: 'Обладает отличными коммуникативными навыками, что позволяет ему эффективно взаимодействовать с коллегами и клиентами, обеспечивая быстрое решение вопросов и качественное обслуживание',
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
const CarouselAdmins = () => {
  const windowWidth = useWindowWidth();

  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
    {windowWidth > 768 ? (

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
        ) : (
          <div className="carousel-mb">
          <div className="slides-container-mb" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slidesData.map((slide, index) => (
              <div key={index} className="slide-mb-ad">
                <div className="content-mb">
                  <div className='tmb-first-line-ad'>
                    <a> 
                      <img src={slide.image2}/>
                      <p className='tmb-text bold-mb'>{slide.text1}</p>
                      <p className='tmb-text simple first'>{slide.text2}</p>
                      <p className='tmb-text simple'>{slide.text3}</p>
                      <p className='tmb-text tmb-info'>{slide.text4}</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="navigation-mb">
            <div className="dots-mb">
              {slidesData.map((_, index) => (
                <span
                  key={index}
                  className={`dot-mb ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div> */}
        </div>
          )}
        </>
  );
};



export default CarouselAdmins;
