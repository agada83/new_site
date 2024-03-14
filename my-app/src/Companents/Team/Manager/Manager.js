// src/App.js
import React, { useState, useEffect  } from 'react';
import '../Carousel.css';
import imgOlga from '../../../assets/Olga_3x4.jpg'
import img2Olga from '../../../assets/Olga_2x3.jpg'


const slidesData = [
  {
    image: imgOlga,
    image2: img2Olga,
    text1: 'Управляющий',
    text2: 'Ольга',
    text3: 'Опыт работы: 15 лет',
    text4: 'Уделяет большое внимание обучению и развитию персонала, мотивирует сотрудников на достижение общих целей, поддерживает их профессиональный рост и развитие',
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
const CarouselStyle = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
    {windowWidth > 768 ? (

    <div className="carousel-man" style={{marginBottom:'3.4svw'}}>
      <div className="slides-container" style={{  }}>
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
            ) : (
              <div className="carousel-mb">
          <div className="slides-container-mb" >
            {slidesData.map((slide, index) => (
              <div key={index} className="slide-mb-ad">
                <div className="content-mb">
                  <div className='tmb-first-line'>
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
        </div>
          )}
        </>

  );
};



export default CarouselStyle;
