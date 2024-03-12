// src/App.js
import React, { useState, useEffect } from 'react';
import '../Carousel.css';
import { Link } from 'react-router-dom';
import imgTatyana from '../../../assets/Tatyana_3x4.jpg'
import imgOksana from '../../../assets/Oksana_3x4.png'
import imgVera from '../../../assets/Vera_3x4.jpg'
import imgAlena from '../../../assets/Alena_3x4.jpg'
import imgEkaterina from '../../../assets/Ekaterina_3x4.jpg'
import { HashLink } from 'react-router-hash-link';

const slidesData = [
  {
    image: imgTatyana,
    text1: 'Арт-директор',
    text2: 'Татьяна',
    text3: 'Опыт работы: 20 лет',
    text4: 'Арт-директор и идейный вдохновитель beauty-проекта «TINTO». Мастер, который «слышит» клиента и приведет к оптимальному результату',
    href:'/tatjana-karruebano'
  },
  {
    image: imgOksana,
    text1: 'Топ-стилист',
    text2: 'Оксана',
    text3: 'Опыт работы: 15 лет',
    text4: 'Профессионально подберет форму стрижки, посоветует модные направления, а также опытный специалист по стойкому выпрямлению волос',
    href:'/oksana-makalkina#main'
  },
  {
    image: imgVera,
    text1: 'Топ-стилист',
    text2: 'Вера Марычева',
    text3: 'Опыт работы: 20 лет',
    text4: 'Опытный мастер, обладающий более чем 20-летним стажем в профессии. Воплотит ваши пожелания и внесет в образ модные «фишки» и тренды. ',
    href:'/vera-marycheva#main'
  },
  {
    image: imgEkaterina,
    text1: 'Топ-стилист',
    text2: 'Екатерина Лосева',
    text3: 'Опыт работы: 20 лет',
    text4: 'Профисиональный мастер-универсал, выполнит стрижки и укладки любой сложности. Многократный призёр конкурсов и чемпионатов по парикмахерскому искусству.',
    href:'/ekaterina-loseva#main'
  },
  {
    image: imgAlena,
    text1: 'Визажист',
    text2: 'Алена Галан',
    text3: 'Опыт работы: 11 лет',
    text4: 'Выполнение любого вида макияжа, оформление бровей (окрашивание и коррекция), ламинирование бровей и ресниц. Несложный пластический грим.',
    href:'/alena-galan#main'
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
                <img src={slide.image} alt={`Slide ${index + 1}`}/>
              </div>
              <div className="text">
                <div className='obrezka1'>
                <p className='bold'>{slide.text1}</p>
                <p>{slide.text2}</p>
                <p>{slide.text3}</p>
                <p>{slide.text4}</p>
                </div>
              </div>
              <div className='obrez-but'>
              <HashLink to={slide.href} className="nav-link">
                <button className='order-button'>Подробнее</button>
              </HashLink>
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
          <div key={index} className="slide-mb">
            <div className="content-mb">
              <div className='tmb-first-line'>
                <a> 
                  <img src={slide.image}></img><p className='bold-mb'>{slide.text1}</p><p>{slide.text2}</p><p>{slide.text3}</p><p>{slide.text4}</p>
                </a>
              </div>
              <div className='tmb-second-line'>
                <div className='text2-mb'>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation-mb">
        <div className="dots-mb">
          {slidesData.map((_, index) => (
            <span
              key={index}
              className={`dot-mb ${index === currentSlide ? 'active' : ''}`}
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
