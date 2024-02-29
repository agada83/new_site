import React, { useState, useEffect } from 'react';
import './Carousel-hair.css';
import hairImg from '../../assets/hair.png';
import { HashLink } from 'react-router-hash-link';

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
                    <img src={hairImg} alt={`Hair`} />
                    <a>Трихология</a>
                    <HashLink to={'/prices'}>
                      <button>Прайс-лист</button>
                    </HashLink>
                  </div>
                  <div className='sc-item'>
                    <img src={hairImg} alt={`Hair`} />
                    <a>Трихология</a>
                    <HashLink to={'/prices'}>
                      <button>Прайс-лист</button>
                    </HashLink>
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
      ) : (
        <div>123</div>
      )}
    </>
  );
};

export default CarouselHair;
