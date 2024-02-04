import React, { useState } from 'react';
import './Salon.css'
import './PriceList.css'
import salonImg from '../../assets/salonImg.png'


const Salon = () => {
    const [expanded, setExpanded] = useState(false);
    const listItems1 = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
    const listItems2 = ['1', '2', '3'];
    const listItems3 = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
    const listItems4 = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);
    
  const toggleExpand = (menuNumber) => {
    switch (menuNumber) {
        case 1:
            setExpanded1(!expanded1);
            break;
        case 2:
            setExpanded2(!expanded2);
            break;
        case 3:
            setExpanded3(!expanded3);
            break;
        case 4:
            setExpanded4(!expanded4);
            break;
        default:
            break;
    }
};

 

    const [displayText1, setDisplayText1] = useState('Парикмахерский зал');
    const [displayText2, setDisplayText2] = useState('TINTO beauty salon–пространство для вашей индивидуальности!');
    const [displayText3, setDisplayText3] = useState('Мы предлагаем широкий выбор стрижек, укладок, окрашиваний и других услугдля всех типов и структур волос. Наши опытные мастера используют только качественные материалы и современное оборудование, чтобы гарантировать превосходный результат.');
    const [displayText4, setDisplayText4] = useState('Мы также предлагаем индивидуальный подход к каждому клиенту, чтобы создать идеальный образ для вас. Посетите наш салон и позвольте нам сделать вашу мечту о красивых и здоровых волосах реальностью!');

    const handleButtonClick = () => {
        setDisplayText1('Парикмахерский зал');
        setDisplayText2('TINTO beauty salon–пространство для вашей индивидуальности!');
        setDisplayText3('Мы предлагаем широкий выбор стрижек, укладок, окрашиваний и других услугдля всех типов и структур волос. Наши опытные мастера используют только качественные материалы и современное оборудование, чтобы гарантировать превосходный результат.');
        setDisplayText4('Мы также предлагаем индивидуальный подход к каждому клиенту, чтобы создать идеальный образ для вас. Посетите наш салон и позвольте нам сделать вашу мечту о красивых и здоровых волосах реальностью!')
    };

    const handleButton2Click = () => {
        setDisplayText1('Макияж и визаж');
        setDisplayText2('TINTO beauty salon–пространство для вашей индивидуальности!');
        setDisplayText3('В нашем салоне вы можете заказать макияж для любого случая: от повседневного до вечернего, а также для фотосессии или свадьбы. Мы предлагаем широкий спектр услуг, наши опытные визажисты помогут вам выбрать подходящий макияж, учитывая ваши индивидуальные особенности, стиль и предпочтения.');
        setDisplayText4(' Записывайтесь на макияж уже сегодня и наслаждайтесь своим новым образом! Мы ждем вас в нашем салоне красоты!');

    };

    return (
    <div className='sl-body'>
        <div className='sl-box'>
            <h1>{displayText1}</h1>
            <div className='sl-content'>
                <img src={salonImg}/>
                <div className='sl-text'>
                    <h2>{displayText2}</h2>
                    <div className='sl-atext'>
                        <a>{displayText3}</a><br/><a>{displayText4}</a>
                    </div>
                    <button>Записаться</button>
                </div>
            </div>
        </div>

      <div>
      <div style={{display:'flex'}}>
      <button onClick={() => toggleExpand(1)}>Toggle Menu 1</button>
      <div className={`menu ${expanded1 ? 'expanded' : ''}`}>
          <h2>Меню 1</h2>
          <p>Текст и контент для меню 1...</p>
      </div>
      </div>

      <div style={{display:'flex'}}>
      <button onClick={() => toggleExpand(2)}>Toggle Menu 2</button>
      <div className={`menu ${expanded2 ? 'expanded' : ''}`}>
          <h2>Меню 1</h2>
          <p>Текст и контент для меню 1...</p>
      </div>
      </div>


      <div style={{display:'flex'}}>
      <button onClick={() => toggleExpand(3)}>Toggle Menu 3</button>
      <div className={`menu ${expanded3 ? 'expanded' : ''}`}>
          <h2>Меню 1</h2>
          <p>Текст и контент для меню 1...</p>
      </div>
      </div>

      <div style={{display:'flex'}}>
      <div className={`menu ${expanded4 ? 'expanded' : ''}`}>
          <h2>Меню 1</h2>
          <p>Текст и контент для меню 1...</p>
      </div>
      <button onClick={() => toggleExpand(4)}>Toggle Menu 4</button>

      </div>

  </div>
  </div>
    );
  };


export default Salon;



        {/* <p>{displayText2}</p>
        <p>{displayText3}</p>
        <p>{displayText4}</p>
        <button onClick={handleButtonClick}>Кнопка 1</button>
        <button onClick={handleButton2Click}>Кнопка 2</button> */}