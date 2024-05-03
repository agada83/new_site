import React, { useState } from 'react';
import './Salon.css'
import './PriceList.css'
import salonImg from '../../assets/salonImg.png'
import salonImgmb from '../../assets/salonImgmb.png'
import arrowbottomImg from '../../assets/arrowbottomImg.png'
import { HashLink } from 'react-router-hash-link';


const Salon = () => {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);
    const [expanded5, setExpanded5] = useState(false);
    const [expanded6, setExpanded6] = useState(false);
    const [expanded7, setExpanded7] = useState(false);
    const [expanded8, setExpanded8] = useState(false);
    const [expanded9, setExpanded9] = useState(false);
    const [expanded10, setExpanded10] = useState(false);
    const [expanded11, setExpanded11] = useState(false);
    const [expanded12, setExpanded12] = useState(false);
    const [expanded13, setExpanded13] = useState(false);

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
    title: 'Стрижка',
    expand: expanded1,
    items: [
      { name:'', price: 'KEUNE/SO PURE',stat:true },
      { name:'Стрижка женская + укладка + сенсуализация волос (по форме)', price: '4000/4800 руб.',stat:false },
      { name:'Стрижка Авторская женская + укладка + сенсуализация волос (новая форма)', price: '5500/6300 руб.',stat:false },
      { name:'Коррекция челки', price: '800/1600 руб.',stat:false },
      { name:'Создание новой челки', price: '1500/2300 руб.',stat:false },
      { name:'Стрижка детская до 12 лет', price: '2000/2800 руб.',stat:false },
      { name:'Стрижка детская подростковая', price: '2500/3300 руб.',stat:false },
      { name:'Стрижка мужская + укладка', price: '3500/4300 руб.',stat:false },
      { name:'Стрижка мужская машинкой', price: '2500/3300 руб.',stat:false },
      { name:'Дизайн бороды', price: '1000 руб.',stat:false },
      { name:'Дизайн усов', price: '800 руб.',stat:false },
    ]
  },
    {
    id: 2,
    title: 'Укладка',
    expand: expanded2,
    items: [
      { name:'', price: 'KEUNE/SO PURE',stat:true },
      { name:'Укладка мужская', price: '1000/1800	руб.',stat:false },
      { name:'Сушка волос феном S', price: '1000/ 1800 руб.',stat:false },
      { name:'Сушка волос феном M', price: '1100/1900 руб.',stat:false },
      { name:'Сушка волос феном L', price: '1200/2000 руб.',stat:false },
      { name:'Сушка волос феном XL', price: '1400/2200 руб.',stat:false },
      { name:'Укладка женская S', price: '1600/2400 руб.',stat:false },
      { name:'Укладка женская M', price: '1800/2600 руб.',stat:false },
      { name:'Укладка женская L', price: '2000/2800 руб.',stat:false },
      { name:'Укладка женская XL', price: '2300/3100 руб.',stat:false },
      { name:'Укладка Коктейльная Cloud Nine S', price: '2100/2900 руб.',stat:false },
      { name:'Укладка Коктейльная Cloud Nine M', price: '2900/3700 руб.',stat:false },
      { name:'Укладка Коктейльная Cloud Nine L', price: '3300/4100 руб.',stat:false },
      { name:'Укладка Коктейльная Cloud Nine XL', price: '3600/4400 руб.',stat:false },
      { name:'Укладка Праздничная S', price: '2100/2900 руб.',stat:false },
      { name:'Укладка Праздничная M', price: '3500/4300 руб.',stat:false },
      { name:'Укладка Праздничная L', price: '3900/4700 руб.',stat:false },
      { name:'Укладка Праздничная XL', price: '4600/5400 руб.',stat:false },
      { name:'Укладка нарощенных волос', price: '3000/3800 руб.',stat:false },
      { name:'Экспресс плетение- косы (без мытья головы) ', price: '1500 руб.',stat:false },
      { name:'Декоративное плетение-косы (без мытья головы) ', price: '2800 руб.',stat:false },
    ]
    },

    {
      id: 3,
      title: 'Окрашивание',
      expand: expanded3,
      items: [
        { name:'Коррекция седины Men Reshade 1фл./20мл.', price: '3400 руб.',stat:false },
        { name:'Коррекция седины Men Reshade 2фл./40мл. ', price: '6600 руб.',stat:false },
        { name:'', price: 'KEUNE/SO PURE',stat:true },
        { name:'Окрашивание волос в 1 тон S', price: '6000/7000 руб.',stat:false },
        { name:'Окрашивание волос в 1 тон M', price: '7700/10200 руб.',stat:false },
        { name:'Окрашивание волос в 1 тон L', price: '11500/13500 руб.',stat:false },
        { name:'Окрашивание волос в 1 тон XL', price: '13800/16500 руб.',stat:false },
        { name:'Color Balancing S', price: '7100/8600 руб.',stat:false },
        { name:'Color Balancing M', price: '8300/9700 руб.',stat:false },
        { name:'Color Balancing L', price: '10500/12200 руб.',stat:false },
        { name:'Color Balancing XL', price: '12600/14500 руб.',stat:false },
        { name:'Колорирование волос S', price: '7200/8600 руб.',stat:false },
        { name:'Колорирование волос M', price: '9300/12000 руб.',stat:false },
        { name:'Колорирование волос L', price: '13600/15000 руб.',stat:false },
        { name:'Колорирование волос XL', price: '16200/18000 руб.',stat:false },
        { name:'Тонирование волос S', price: '4500/5500 руб.',stat:false },
        { name:'Тонирование волос M', price: '5800/7500 руб.',stat:false },
        { name:'Тонирование волос L', price: '8300/10600 руб.',stat:false },
        { name:'Тонирование волос XL', price: '10800/14100 руб.',stat:false },
        { name:'Тонирование волос XXL', price: '13500/16000 руб.',stat:false },
      ]
    },
    {
        id: 4,
        title: 'Рассветление',
        expand: expanded4,
        items: [
            { name: 'Ультра Блонд 3000+ Tinta окрашивание корней', price: '7800 руб.',stat:false },
            { name: 'Ультра Блонд 3000+ Tinta S', price: '12000 руб.',stat:false },
            { name: 'Ультра Блонд 3000+ Tinta M', price: '16500 руб.',stat:false },
            { name: 'Ультра Блонд 3000+ Tinta L', price: '25100 руб.',stat:false },
            { name: 'Ультра Блонд 3000+ Tinta XL', price: '32500 руб.',stat:false },
            { name: 'Обесцвечивание волос KEUNE S', price: '4500 руб.',stat:false },
            { name: 'Обесцвечивание волос KEUNE M', price: '5500 руб.',stat:false },
            { name: 'Обесцвечивание волос KEUNE L', price: '6800 руб.',stat:false },
            { name: 'Обесцвечивание волос KEUNE XL', price: '7600 руб.',stat:false },
            { name: 'Блики (мелирование нескольких прядей)', price: '4500 руб.',stat:false },
            { name: 'Прикорневое мелирование волос', price: '6000 руб.',stat:false },
            { name: 'Мелирование волос S', price: '6000 руб.',stat:false },
            { name: 'Мелирование волос M', price: '7000 руб.',stat:false },
            { name: 'Мелирование волос L', price: '9500 руб.',stat:false },
            { name: 'Мелирование волос XL', price: '11800 руб.',stat:false },
            { name: 'Мелирование волос красителем Tinto S', price: '6500 руб.',stat:false },
            { name: 'Мелирование волос красителем Tinto M', price: '8000 руб.',stat:false },
            { name: 'Мелирование волос красителем Tinto L', price: '11700 руб.',stat:false },
            { name: 'Мелирование волос красителем Tinto XL', price: '15300 руб.',stat:false },
            { name: 'Брондирование / Омбре/Шатуш S', price: '11500/12000 руб.',stat:false },
            { name: 'Брондирование / Омбре/Шатуш M', price: '14000/15000 руб.',stat:false },
            { name: 'Брондирование / Омбре/Шатуш L', price: '17000/17500 руб.',stat:false },
            { name: 'Брондирование / Омбре/Шатуш XL  ', price: '18500/21000 руб.',stat:false },
            { name: 'Окрашивание Аиртач/Airtouch М', price: '16500/17000 руб.',stat:false },
            { name: 'Окрашивание Аиртач/Airtouch L', price: '19500/20000 руб.',stat:false },
            { name: 'Окрашивание Аиртач/Airtouch XL', price: '24000/25000 руб.',stat:false },
        ]
    },
    {
      id: 5,
      title: 'Элюмирование',
      expand: expanded5,
      items: [
        { name: 'Элюминирование в 1 тон S', price: '7000 руб.',stat:false },
        { name: 'Элюминирование в 1 тон M', price: '9650 руб.',stat:false },
        { name: 'Элюминирование в 1 тон L', price: '12100 руб.',stat:false },
        { name: 'Элюминирование в 1 тон XL', price: '15600 руб.',stat:false },
        { name: 'Элюминирование Color Balancing (окрашивание корней и тонирование по длине ) S', price: '11400 руб.',stat:false },
        { name: 'Элюминирование Color Balancing (окрашивание корней и тонирование по длине ) M', price: '14000 руб.',stat:false },
        { name: 'Элюминирование Color Balancing (окрашивание корней и тонирование по длине ) L', price: '16700 руб.',stat:false },
        { name: 'Элюминирование Color Balancing (окрашивание корней и тонирование по длине ) XL', price: '18500 руб.',stat:false },
        { name: 'Снятие Элюмен RETURN S', price: '3000 руб.',stat:false },
        { name: 'Снятие Элюмен RETURN M', price: '4600 руб.',stat:false },
        { name: 'Снятие Элюмен RETURN L', price: '6400 руб.',stat:false },
        { name: 'Снятие Элюмен RETURN XL', price: '7400 руб.',stat:false },
        { name: 'Снятие Элюмен ERASER S', price: '3000 руб.',stat:false },
        { name: 'Снятие Элюмен ERASER M', price: '3500 руб.',stat:false },
        { name: 'Снятие Элюмен ERASER L', price: '6100 руб.',stat:false },
        { name: 'Снятие Элюмен ERASER XL', price: '6600 руб.',stat:false },
      ]
    },
    {
      id: 6,
      title: 'Лечение и спа',
      expand: expanded6,
      items: [
        { name: 'Лечебная сенсуалирующая маска/Экспресс уход', price: '600 руб.',stat:false },
        { name: 'Лечение волос BondPro', price: '2500 руб.',stat:false },
        { name: 'Окрашивание волос + лечением BondPro S/M', price: '2000 руб.',stat:false },
        { name: 'Окрашивание волос + лечением BondPro L/XL', price: '2300 руб.',stat:false },
        { name: 'LEBEL', price: '',stat:true },
        { name: 'SPA-программа «Hair Skin Relaxing» S', price: '2100 руб.',stat:false },
        { name: 'SPA-программа «Hair Skin Relaxing» M', price: '3000 руб.',stat:false },
        { name: 'SPA-программа «Hair Skin Relaxing» L', price: '3700 руб.',stat:false },
        { name: 'SPA-программа «Hair Skin Relaxing» XL', price: '4700 руб.',stat:false },
        { name: 'Счастье для волос БЛЕСК и СИЛА S', price: '2000 руб.',stat:false },
        { name: 'Счастье для волос БЛЕСК и СИЛА M', price: '3000 руб.',stat:false },
        { name: 'Счастье для волос БЛЕСК и СИЛА L', price: '4000 руб.',stat:false },
        { name: 'Счастье для волос БЛЕСК и СИЛА XL', price: '5400 руб.',stat:false },
        { name: 'Счастье для волос ЖИЗНЕННАЯ СИЛА S', price: '2000 руб.',stat:false },
        { name: 'Счастье для волос ЖИЗНЕННАЯ СИЛА M', price: '3000 руб.',stat:false },
        { name: 'Счастье для волос ЖИЗНЕННАЯ СИЛА L', price: '4000 руб.',stat:false },
        { name: 'Счастье для волос ЖИЗНЕННАЯ СИЛА XL', price: '5400 руб.',stat:false },
        { name: 'Абсолютное счастье для волос S', price: '2000 руб.',stat:false },
        { name: 'Абсолютное счастье для волос M', price: '3000 руб.',stat:false },
        { name: 'Абсолютное счастье для волос L', price: '4000 руб.',stat:false },
        { name: 'Абсолютное счастье для волос XL', price: '5400 руб.',stat:false },
      ]
    },
    {
      id: 7,
      title: 'Трихология',
      expand: expanded7,
      items: [
        { name: 'Детокс-пилинг д/кожи головы MEDAVITA (П25/Ш20/Э15/без ампулы)', price: '2000 руб.',stat:false },
        { name: 'Программа против выпадения волос MEDAVITA (пилинг+ампула)', price: '3500 руб.',stat:false }
      ]
    },
    {
      id: 10,
      title: 'Химия',
      expand: expanded10,
      items: [
        { name: 'Щадящая химическая завивка Evolution S', price: '8500 руб.',stat:false },
        { name: 'Щадящая химическая завивка Evolution M', price: '9700 руб.',stat:false },
        { name: 'Щадящая химическая завивка Evolution L', price: '17600 руб.',stat:false },
        { name: 'Мягкая щелочная завивка-уход VITENSITY - S', price: '5200 руб.',stat:false },
        { name: 'Мягкая щелочная завивка-уход VITENSITY - M', price: '7100 руб.',stat:false },
        { name: 'Мягкая щелочная завивка-уход VITENSITY - L', price: '11000 руб.',stat:false },
      ]
    },
    {
      id: 11,
      title: 'Доп услуги',
      expand: expanded11,
      items: [
        { name: 'Удаление нежелательного оттенка/декапирование S', price: '3300 руб.',stat:false },
        { name: 'Удаление нежелательного оттенка/декапирование M', price: '4000 руб.',stat:false },
        { name: 'Удаление нежелательного оттенка/декапирование L', price: '6500 руб.',stat:false },
        { name: 'Удаление нежелательного оттенка/декапирование XL', price: '8500 руб.',stat:false },
        { name: 'Препигментация 1 (20гр)', price: '1700/ 2400 руб.',stat:false },
        { name: 'Препигментация 2 (30гр)', price: '2500/ 3100 руб.',stat:false },
        { name: 'Препигментация 3 (40гр)', price: '3300/ 3700 руб.',stat:false },
        { name: 'Блондирующая смывка S', price: '1100 руб.',stat:false },
        { name: 'Блондирующая смывка M', price: '1300 руб.',stat:false },
        { name: 'Блондирующая смывка L', price: '1600 руб.',stat:false },
        { name: 'Блондирующая смывка XL', price: '2000 руб.',stat:false },
      ]
    }
  ];
  
  const priceMakeData = [
    {
      id: 12,
      title: 'Услуги визажиста',
      expand: expanded12,
      items: [
        { name: 'Макияж дневной повседневный - BUSINESS LADY', price: '2900 руб.',stat:false },
        { name: 'Макияж коктейльный - PARTY GIRL', price: '2900 руб.',stat:false },
        { name: 'Макияж вечерний - NIGHT PARTY', price: '3800 руб.',stat:false },
        { name: 'Макияж возрасной- ANTI-AGE', price: '4800 руб.',stat:false },
        { name: 'Макияж пробный свадебный- TEST MARRIDE DAY', price: '3800 руб.',stat:false },
        { name: 'Макияж свадебный- MARRIDE DAY', price: '4900 руб.',stat:false }
      ]
    },
    {
      id: 13,
      title: 'Услуги бровиста',
      expand: expanded13,
      items: [
        { name: 'Коррекция бровей (раннее созданной формы)', price: '750 руб.',stat:false },
        { name: 'Создание новой формы бровей', price: '1500 руб.',stat:false },
        { name: 'Окрашивание бровей ХНА', price: '1200 руб.',stat:false },
        { name: 'Окрашивание бровей краска', price: '1200 руб.',stat:false },
        { name: 'Ламинирование бровей', price: '3800 руб.',stat:false },
        { name: 'Коллагенирование бровей', price: '4500 руб.',stat:false },
        { name: 'Счастье для бровей', price: '1200 руб.',stat:false },
        { name: 'Окрашивание ресниц', price: '800 руб.',stat:false },
        { name: 'Ламинирование ресниц', price: '4200 руб.',stat:false },
        { name: 'Коллагенирование ресниц', price: '5000 руб.',stat:false },
        { name: 'Макияж с комментарием+разбор косметички', price: '5000 руб.',stat:false },
        { name: 'Макияж-обучение', price: '8000 руб.',stat:false },
      ]
    },
    {
      id: 8,
      title: 'Депиляция воском',
      expand: expanded8,
      items: [
        { name: 'Верхняя губя', price: '500 руб.',stat:false },
        { name: 'Подбородок', price: '500 руб.',stat:false },
        { name: 'Лицо', price: '1000 руб.',stat:false },
      ]
    }  ];
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
    const [activeButton, setActiveButton] = useState(1);

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
            <div className='sl-prim'>
              <a>**Стоимость услуги увеличивается на 30 % при записи за час до начала  и после окончания графика работы**</a>
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
                    <a className={`pr-list-name${menu.stat ? 'stat':''}`}>{item.name}</a>
                    <a className={`pr-list-price${menu.stat ? 'stat':''}`}>{item.price}</a>
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
                    <a className={`pr-list-name${item.stat ? 'stat':''}`}>{item.name}</a>
                    <a className={`pr-list-price${item.stat ? 'stat    ':''}`}>{item.price}</a>
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
