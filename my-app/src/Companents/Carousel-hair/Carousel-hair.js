import React, { useState } from 'react';
import './Carousel-hair.css'; // Подключаем файл со стилями
import hairImg from '../../assets/hair.png'


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Массив с объектами, содержащими путь к изображению и текст
  const items = [
    {
      image: hairImg,
      text: 'Укладки',
    },
    {
      image: hairImg,
      text: 'Стрижки',
    },
    {
      image: hairImg,
      text: 'Окрашивание',
    },
    {
      image: hairImg,
      text: 'Четвертый',
    },
    {
      image: hairImg,
      text: 'Пятый',
    },
    {
      image: hairImg,
      text: 'Шестой',
    },
    {
      image: hairImg,
      text: 'Седьмой',
    },
    {
      image: hairImg,
      text: 'Восьмой',
    },
    {
      image: hairImg,
      text: 'Девятый',
    },
  ];

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {groupedItems.map((group, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ transform: `translateX(${(index - currentSlide) * 100+20}vw)` }}            >
            {group.map((item, idx) => (
              <div key={idx} className="carousel-content">
                <img src={item.image} alt={`Image ${index * 3 + idx/3}`} className="carousel-image" />
                <div className="text-wrapper">
                  <p>{item.text}</p>
                  <button className='my-button'>Прайс-лист</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="dots">
        {groupedItems.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;