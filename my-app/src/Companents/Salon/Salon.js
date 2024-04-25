import React, { useState } from 'react';
import './Salon.css'
import './PriceList.css'
import salonImg from '../../assets/salonImg.png'
import salonImgmb from '../../assets/salonImgmb.png'
import arrowbottomImg from '../../assets/arrowbottomImg.png'
import { HashLink } from 'react-router-hash-link';


const Salon = () => {
    const [expanded1, setExpanded1] = useState(true);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(true);
    const [expanded4, setExpanded4] = useState(true);
    const [expanded5, setExpanded5] = useState(true);
    const [expanded6, setExpanded6] = useState(true);
    const [expanded7, setExpanded7] = useState(true);
    const [expanded8, setExpanded8] = useState(true);
    const [expanded9, setExpanded9] = useState(true);
    const [expanded10, setExpanded10] = useState(true);
    const [expanded11, setExpanded11] = useState(true);
    const [expanded12, setExpanded12] = useState(true);
    const [expanded13, setExpanded13] = useState(true);

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
        case 5:
            setExpanded5(!expanded5);
            break;
        case 6:
            setExpanded6(!expanded6);
            break;
        case 7:
            setExpanded7(!expanded7);
            break;
        case 8:
            setExpanded8(!expanded8);
            break;
        case 9:
            setExpanded9(!expanded9);
            break;
        case 10:
            setExpanded10(!expanded10);
            break;
        case 11:
            setExpanded11(!expanded11);
            break;
        case 12:
            setExpanded12(!expanded12);
            break;
        case 13:
            setExpanded13(!expanded13);
            break;
        default:
            break;
    }
};
const priceHairData = [
    {
    id: 1,
    title: 'Укладка',
    expand: expanded1,
    items: [
        { name: 'Укладка мужская', price: '1000 руб.' },
        { name: 'Сушка волос феном S/M/L/XL', price: '1000/ 1100/ 1200/ 1400 руб.' },
        { name: 'Укладка женская S/M/L/XL', price: '1600/ 1800/ 2000/ 2300 руб.' },
        { name: 'Укладка Коктейльная Cloud Nine S/M/L/XL', price: '2100/2900/3300/3600 руб.' },
        { name: 'Укладка празничная S/M/L/XL', price: '2100/ 3500/ 3900/ 4600 руб.' },
        { name: 'Укладка нарощенных волос', price: '2800 руб.' },
        { name: 'Экспресс плетение косы', price: '1200 руб.' },
        { name: 'Декоративное плетение косы', price: '2600 руб.' }
    ]
    },
    {
      id: 2,
      title: 'Стрижка',
      expand: expanded2,
      items: [
        { name: 'Стрижка женская + укладка S/M/L/XL + сенсуалирование волос', price: '2800/ 3000/ 3200/ 3500 руб.' },
        { name: 'Стрижка с укладкой Креативная/Авторская', price: '3500/ 4000 руб.' },
        { name: 'Коррекций челки', price: '800 руб.' },
        { name: 'Создание новой челки', price: '1500 руб.' },
        { name: 'Стрижка детская до 12 лет/ подростковая', price: '1500/ 2000 руб.' },
        { name: 'Стрижка мужская + укладка', price: '2500 руб.' },
        { name: 'Стрижка мужская креативная + укладка', price: '3300 руб.' },
        { name: 'Стрижка мужская машинкой', price: '1500 руб.' },
        { name: 'Дизайн бороды', price: '1000 руб.' },
        { name: 'Дизайн усов', price: '800 руб.' }
      ]
    },
    {
      id: 3,
      title: 'Окрашивание',
      expand: expanded3,
      items: [
        { name: 'Коррекция седины Men Reshade (1фл./20мл.)/(2фл./40мл.)', price: '3400/ 6600 руб.' },
        { name: 'Окрашивание волос в 1 тон SO PURE - S/M/L/XL', price: '7000/ 10200/ 13500/ 16500 руб.' },
        { name: 'Окрашивание волос в 1 тон KEUNE S/M/L/XL', price: '6000/ 7700/ 11500/ 13800 руб.' },
        { name: 'АНИМАЦИЯ ЦВЕТА @PURE PIGMENTS GW', price: '500 руб.' },
        { name: 'Color Balancing KEUNE - S/M/L/XL', price: '7100/ 8300/ 10500/ 12600 руб.' },
        { name: 'Color Balancing SO PURE - S/M/L/XL', price: '8600/ 9700/ 12200/ 14500 руб.' },
        { name: 'Тонирование волос KEUNE - S/M/L/XL/XLL', price: '4500/ 5800/ 8300/ 10800/ 13500 руб.' },
        { name: 'Тонирование волос SO PURE - S/M/L/XL/XLL', price: '5500/ 7500/ 10600/ 14100/ 16000 руб.' },
        { name: 'Колорирование волос KEUNE- S/M/L/XL', price: '7200/ 9300/ 13600/ 16200 руб.' },
        { name: 'Колорирование волос SO PURE - S/M/L/XL', price: '8600/ 12000/ 15000/ 18000 руб.' }
      ]
    },
    {
        id: 4,
        title: 'Рассветление',
        expand: expanded4,
        items: [
            { name: 'Ультра Блонд 3000+ Tinta-S/M/L/XL', price: '7800/ 16500/ 25100/ 32500 руб.' },
            { name: 'Обесцвечивание волос KEUNE - S/M/L/XL', price: '4500/ 5500/ 6800/ 7600 руб.' },
            { name: 'Блики (мелирование нескольких прядей)', price: '4500 руб.' },
            { name: 'Прикорневое мелирование волос', price: '6000 руб.' },
            { name: 'Мелирование волос S S/M/L/XL', price: '6000/ 7000/ 9500/ 11800 руб.' }
        ]
    },
    {
      id: 5,
      title: 'Элюмирование',
      expand: expanded5,
      items: [
        { name: 'Элюминирование в 1 тон -S/M/L/XL', price: '7000/ 96500/ 12100/ 15600 руб.' },
        { name: 'Элюминирование Color Balancing (окрашивание корней и тонирование по длине ) S/M/L/XL', price: '11400/ 14000/ 16700/ 18500 руб.' },
        { name: 'Снятие Элюмен RETURN -S/M/L/XL', price: '3000/ 4600/ 6400/ 7400 руб.' },
        { name: 'Снятие Элюмен ERASER -S/M/L/XL', price: '3000/ 3500/ 6100/ 6600 руб.' }
      ]
    },
    {
      id: 6,
      title: 'Лечение и спа',
      expand: expanded6,
      items: [
        { name: 'Лечебная сенсуалирующая маска/Экспресс уход', price: '600 руб.' },
        { name: 'Лечение волос BondPro', price: '2500 руб.' },
        { name: 'Окрашивание волос + лечением BondPro S/M', price: '2000 руб.' },
        { name: 'Окрашивание волос + лечением BondPro L/XL', price: '2300 руб.' },
        { name: 'SPA-программа «Hair Skin Relaxing» S/M/L/XL', price: '2100/ 3000/ 3700/ 4700 руб.' },
        { name: 'Счастье для волос ЖИЗНЕННАЯ СИЛА S/M/L/XL', price: '2000/ 3000/ 4000/ 5400 руб.' },
        { name: 'Абсолютное счастье для волос S/M/L/XL', price: '2000/ 3000/ 4000/ 5400 руб.' },
        { name: 'Счастье для волос БЛЕСК и СИЛА S/M/L/XL', price: '3000/ 5500/ 7500/ 10000 руб.' },
        { name: 'СПА-уход SO PURE - S/M/L/XL', price: '1100/ 1500/ 2100/ 2500 руб.' }
      ]
    },
    {
      id: 7,
      title: 'Трихология',
      expand: expanded7,
      items: [
        { name: 'Детокс-пилинг д/кожи головы MEDAVITA (П25/Ш20/Э15/без ампулы)', price: '2000 руб.' },
        { name: 'Программа против выпадения волос MEDAVITA (пилинг+ампула)', price: '3500 руб.' }
      ]
    },
    {
      id: 8,
      title: 'Техники',
      expand: expanded8,
      items: [
        { name: 'Брондирование Омбре- S/M/L/XL', price: '11500/ 14000/ 17000/ 18500 руб.' },
        { name: 'Брондирование Шатуш - S/M/L/XL', price: '12000/ 15000/ 17000/ 21000 руб.' },
        { name: 'Окрашивание Аиртач - М/L/XL', price: '16500/ 19500/ 24000 руб.' },
        { name: 'Окрашивание Airtouch - М/L/XL', price: '17000/ 20000/ 25000 руб.' }
      ]
    },
    {
      id: 9,
      title: 'Выпрямление',
      expand: expanded9,
      items: [
        { name: 'Кератиновое выпрямление/восстановление волос -S/M/L/XL', price: '6500/ 8500/ 11000/ 13500 руб.' }
      ]
    },
    {
      id: 10,
      title: 'Завивка',
      expand: expanded10,
      items: [
        { name: 'Щадящая химическая завивка Evolution - S/M/L', price: '8500/ 9700/ 17600 руб.' },
        { name: 'Мягкая щелочная завивка-уход VITENSITY - S/M/L', price: '5200/ 7100/ 11000 руб.' }
      ]
    },
    {
      id: 11,
      title: 'Доп услуги',
      expand: expanded11,
      items: [
        { name: 'Удаление нежелательного оттенка/декапирование S/M/L/XL', price: '3300/ 4000/ 6500/ 8500 руб.' },
        { name: 'Препигментация 1 (20гр)', price: '1700/ 2400 руб.' },
        { name: 'Препигментация 2 (30гр)', price: '2500/ 3100 руб.' },
        { name: 'Препигментация 3 (40гр)', price: '3300/ 3700 руб.' },
        { name: '3300/3700 руб.', price: '1100/ 1300/ 1600/ 2000 руб.' }
      ]
    }
  ];
  
  const priceMakeData = [
    {
      id: 12,
      title: 'Услуги визажиста',
      expand: expanded12,
      items: [
        { name: 'Макияж дневной повседневный - BUSINESS LADY', price: '2500 руб.' },
        { name: 'Макияж коктейльный - PARTY GIRL', price: '2500 руб.' },
        { name: 'Макияж вечерний - NIGHT PARTY', price: '2800 руб.' },
        { name: 'Макияж возрасной- ANTI-AGE', price: '3000 руб.' },
        { name: 'Макияж пробный свадебный- TEST MARRIDE DAY', price: '2800 руб.' },
        { name: 'Макияж свадебный- MARRIDE DAY', price: '3800 руб.' }
      ]
    },
    {
      id: 13,
      title: 'Услуги бровиста',
      expand: expanded13,
      items: [
        { name: 'Коррекция бровей (раннее созданной формы)', price: '750 руб.' },
        { name: 'Создание новой формы бровей', price: '1500 руб.' },
        { name: 'Окрашивание бровей ХНА', price: '1500 руб.' },
        { name: 'Окрашивание бровей краска', price: '850 руб.' },
        { name: 'Ламинирование бровей', price: '3800 руб.' },
        { name: 'Счастье для бровей', price: '1200 руб.' },
        { name: 'Окрашивание ресниц', price: '800 руб.' },
        { name: 'Ламинирование ресниц', price: '4200 руб.' }
      ]
    }
  ];
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);
  const showContentHandler = (contentNumber) => {
    if (contentNumber === 1) {
      setShowContent1(true);
      setShowContent2(false);
    } else if (contentNumber === 2) {
      setShowContent1(false);
      setShowContent2(true);
    }
  };
 

    const [displayText1, setDisplayText1] = useState('Парикмахерский зал');
    const [displayText2, setDisplayText2] = useState('TINTO beauty salon–пространство для вашей индивидуальности!');
    const [displayText3, setDisplayText3] = useState('Мы предлагаем широкий выбор стрижек, укладок, окрашиваний и других услугдля всех типов и структур волос. Наши опытные мастера используют только качественные материалы и современное оборудование, чтобы гарантировать превосходный результат.');
    const [displayText4, setDisplayText4] = useState('Мы также предлагаем индивидуальный подход к каждому клиенту, чтобы создать идеальный образ для вас. Посетите наш салон и позвольте нам сделать вашу мечту о красивых и здоровых волосах реальностью!');
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = () => {
        setActiveButton(1);
        setDisplayText1('Парикмахерский зал');
        setDisplayText2('TINTO beauty salon–пространство для вашей индивидуальности!');
        setDisplayText3('Мы предлагаем широкий выбор стрижек, укладок, окрашиваний и других услугдля всех типов и структур волос. Наши опытные мастера используют только качественные материалы и современное оборудование, чтобы гарантировать превосходный результат.');
        setDisplayText4('Мы также предлагаем индивидуальный подход к каждому клиенту, чтобы создать идеальный образ для вас. Посетите наш салон и позвольте нам сделать вашу мечту о красивых и здоровых волосах реальностью!')
    };

    const handleButton2Click = () => {
        setActiveButton(2);
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
                <img className='sl-desctop-img' src={salonImg}/>
                <img className='sl-mobile-img' src={salonImgmb}/>
                <div className='sl-text'>
                    <h2>{displayText2}</h2>
                    <div className='sl-atext'>
                        <div className='pzdc1'><a>{displayText3}</a></div><br/><div className='pzdc'><a>{displayText4}</a></div>
                    </div>
                    <HashLink to='/#registration' className='sukablat'>
                        <button>Записаться</button>
                    </HashLink>
                </div>
            </div>
        </div>

    <div className='pr-box'>
        <div className='pr-content'>
            <div className='pr-switch'>
                <div className={`pr-diva ${activeButton === 1 ? 'active' : ''}`} onClick={() => {handleButtonClick();showContentHandler(1);}}><a>ПАРИКМАХЕРСКИЕ УСЛУГИ</a><div className='pr-divht'/></div>
                <div className={`pr-diva ${activeButton === 2 ? 'active' : ''}`} onClick={() => {handleButton2Click();showContentHandler(2);}}><a>МАКИЯЖ И ВИЗАЖ</a><div className='pr-divht'/></div>
            </div>
            {showContent2 && <div>
                {priceMakeData.map((menu) => (
          <div className='pr-menu'>
            <div className={`menu-${menu.id} ${menu.expand ? 'expanded' : ''}`}>
              <div className='pr-menu-visible' onClick={() => toggleExpand(menu.id)}>
                <h2>{menu.title}</h2>
                <button><img src={arrowbottomImg}/></button>
              </div>
              <div className='pr-hair-full-price'>
                {menu.items.map((item, index) => (
                  <div className='pr-line'>
                    <a className='pr-list-name'>{item.name}</a>
                    <a className='pr-list-price'>{item.price}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
            </div>}
            {showContent1 && <div>
        {priceHairData.map((menu) => (
          <div className='pr-menu'>
            <div className={`menu-${menu.id} ${menu.expand ? 'expanded' : ''}`}>
              <div className='pr-menu-visible' onClick={() => toggleExpand(menu.id)}>
                <h2>{menu.title}</h2>
                <button><img src={arrowbottomImg}/></button>
              </div>
              <div className='pr-hair-full-price'>
                {menu.items.map((item, index) => (
                  <div className='pr-line'>
                    <a className='pr-list-name'>{item.name}</a>
                    <a className='pr-list-price'>{item.price}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}</div>}
        </div>
    </div>
  </div>
    );
  };


export default Salon;
