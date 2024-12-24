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
    const [expanded14, setExpanded14] = useState(false);

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
        case 14:
          setExpanded14(!expanded14);
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
      { name:'Стрижка женская + укладка (корректирующая)', price: '6000/6800 руб.',stat:false },
      { name:'Стрижка женская + укладка', price: '7500/8300 руб.',stat:false },
      { name:'Коррекция челки', price: '1500/2300 руб.',stat:false },
      { name:'Стрижка детская до 12 лет', price: '2500/3300 руб.',stat:false },
      { name:'Стрижка детская подростковая', price: '3000/3800 руб.',stat:false },
      { name:'Стрижка мужская + укладка', price: '4000/4800 руб.',stat:false },
      { name:'Стрижка мужская машинкой', price: '3000/3800 руб.',stat:false },
      { name:'Дизайн бороды и усов', price: '1500 руб.',stat:false },
    ]
  },
    {
    id: 2,
    title: 'Укладка',
    expand: expanded2,
    items: [
      { name:'', price: 'KEUNE/SO PURE',stat:true },
      { name:'Сушка волос феном S/М', price: '1200/2000 руб.',stat:false },
      { name:'Сушка волос феном L/XL', price: '1500/2З00 руб.',stat:false },
      { name:'Укладка женская на брашинг S/M', price: '3000/3800 руб.',stat:false },
      { name:'Укладка женская на брашинг L/XL', price: '4000/4800 руб.',stat:false },
      { name:'Укладка на горячий инструмент S/М', price: '3500/4300 руб.',stat:false },
      { name:'Укладка на горячий инструмент L/XL', price: '5000/5800 руб.',stat:false },
    ]
    },
    {
      id: 3,
      title: 'Элюмирование',
      expand: expanded3,
      items: [
        { name: 'Элюминирование в 1 тон S', price: '7000 руб.',stat:false },
        { name: 'Элюминирование в 1 тон M', price: '9650 руб.',stat:false },
        { name: 'Элюминирование в 1 тон L', price: '12100 руб.',stat:false },
        { name: 'Элюминирование в 1 тон XL', price: '15600 руб.',stat:false },
        { name: '', price: '',stat:true },
        { name: 'Элюминирование Color Balancing (окрашивание корней и тонирование по длине) S', price: '11400 руб.',stat:false },
        { name: 'Элюминирование Color Balancing (окрашивание корней и тонирование по длине) M', price: '14000 руб.',stat:false },
        { name: 'Элюминирование Color Balancing (окрашивание корней и тонирование по длине) L', price: '16700 руб.',stat:false },
        { name: 'Элюминирование Color Balancing (окрашивание корней и тонирование по длине) XL', price: '18500 руб.',stat:false },
        { name: '', price: '',stat:true },
        { name: 'Снятие Элюмен RETURN S', price: '3000 руб.',stat:false },
        { name: 'Снятие Элюмен RETURN M', price: '4600 руб.',stat:false },
        { name: 'Снятие Элюмен RETURN L', price: '6400 руб.',stat:false },
        { name: 'Снятие Элюмен RETURN XL', price: '7400 руб.',stat:false },
        { name: '', price: '',stat:true },
        { name: 'Снятие Элюмен ERASER S', price: '3000 руб.',stat:false },
        { name: 'Снятие Элюмен ERASER M', price: '3500 руб.',stat:false },
        { name: 'Снятие Элюмен ERASER L', price: '6100 руб.',stat:false },
        { name: 'Снятие Элюмен ERASER XL', price: '6600 руб.',stat:false },
      ]
    },
    {
      id: 4,
      title: 'Лечение и спа',
      expand: expanded4,
      items: [
        { name: 'Лечебная маска/экспресс-уход', price: '600 руб.',stat:false },
        { name: 'Лечение волос BondFusion + сушка волос', price: '3000 руб.',stat:false },
        { name: 'Лечение BondFusion при окрашивание S/M', price: '2000 руб.',stat:false },
        { name: 'Лечение BondFusion при окрашивание L/XL', price: '2500 руб.',stat:false },
        { name: 'LEBEL', price: '',stat:true },
        { name: 'SPA-программа «Hair Skin Relaxing» + сушка волос S', price: '3000 руб.',stat:false },
        { name: 'SPA-программа «Hair Skin Relaxing» + сушка волос M', price: '3500 руб.',stat:false },
        { name: 'SPA-программа «Hair Skin Relaxing» + сушка волос L', price: '4500 руб.',stat:false },
        { name: 'SPA-программа «Hair Skin Relaxing» + сушка волос XL', price: '5500 руб.',stat:false },
        { name: '', price: '',stat:true },
        { name: 'Счастье для волос БЛЕСК и СИЛА + сушка волос S', price: '2500 руб.',stat:false },
        { name: 'Счастье для волос БЛЕСК и СИЛА + сушка волос M', price: '3500 руб.',stat:false },
        { name: 'Счастье для волос БЛЕСК и СИЛА + сушка волос L', price: '4500 руб.',stat:false },
        { name: 'Счастье для волос БЛЕСК и СИЛА + сушка волос XL', price: '6000 руб.',stat:false },
        { name: '', price: '',stat:true },
        { name: 'Счастье для волос ЖИЗНЕННАЯ СИЛА + сушка волос S', price: '2500 руб.',stat:false },
        { name: 'Счастье для волос ЖИЗНЕННАЯ СИЛА + сушка волос M', price: '3500 руб.',stat:false },
        { name: 'Счастье для волос ЖИЗНЕННАЯ СИЛА + сушка волос L', price: '4500 руб.',stat:false },
        { name: 'Счастье для волос ЖИЗНЕННАЯ СИЛА + сушка волос XL', price: '6000 руб.',stat:false },
        { name: '', price: '',stat:true },
        { name: 'Абсолютное счастье для волос + сушка волос S', price: '4000 руб.',stat:false },
        { name: 'Абсолютное счастье для волос + сушка волос M', price: '6500 руб.',stat:false },
        { name: 'Абсолютное счастье для волос + сушка волос L', price: '8500 руб.',stat:false },
        { name: 'Абсолютное счастье для волос + сушка волос XL', price: '11000 руб.',stat:false },
      ]
    },
    {
      id: 5,
      title: 'Трихология',
      expand: expanded5,
      items: [
        { name: 'Программа против выпадения волос MEDAVITA (пилинг+ампула) + сушка волос', price: '4500 руб.',stat:false },
        { name: 'Детокс-пилинг д/кожи головы MEDAVITA + сушка волос', price: '3000 руб.',stat:false }
      ]
    },
    {
      id: 6,
      title: 'Химия',
      expand: expanded6,
      items: [
        { name: 'Щадящая химическая завивка Evolution S', price: '9000 руб.',stat:false },
        { name: 'Щадящая химическая завивка Evolution M', price: '10200 руб.',stat:false },
        { name: 'Щадящая химическая завивка Evolution L', price: '18600 руб.',stat:false },
        { name: '', price: '',stat:true },
        { name: 'Мягкая щелочная завивка-уход VITENSITY - S', price: '6000 руб.',stat:false },
        { name: 'Мягкая щелочная завивка-уход VITENSITY - M', price: '8000 руб.',stat:false },
        { name: 'Мягкая щелочная завивка-уход VITENSITY - L', price: '12000 руб.',stat:false },
      ]
    },
    // {
    //   id: 9,
    //   title: 'Выпрямление',
    //   expand: expanded9,
    //   items: [
    //     { name: 'Кератиновое выпрямление/восстановление волос S', price: '8000 руб.',stat:false },
    //     { name: 'Кератиновое выпрямление/восстановление волос M', price: '10000 руб.',stat:false },
    //     { name: 'Кератиновое выпрямление/восстановление волос L', price: '14000 руб.',stat:false },
    //     { name: 'Кератиновое выпрямление/восстановление волос XL', price: '21000 руб.',stat:false },
    //   ]
    // },
    {
      id: 7,
      title: 'Окрашивание',
      expand: expanded7,
      items: [
        { name:'Коррекция седины Men Reshade 1фл./20мл.', price: '3400 руб.',stat:false },
        { name:'Коррекция седины Men Reshade 2фл./40мл. ', price: '6600 руб.',stat:false },
        { name:'', price: 'KEUNE/SO PURE',stat:true },
        { name:'Окрашивание волос в 1 тон S', price: '7000/8000 руб.',stat:false },
        { name:'Окрашивание волос в 1 тон M', price: '9000/10500 руб.',stat:false },
        { name:'Окрашивание волос в 1 тон L', price: '12000/13800 руб.',stat:false },
        { name:'Окрашивание волос в 1 тон XL', price: '15000/17000 руб.',stat:false },
        { name: '', price: 'KEUNE/SO PURE',stat:true },
        { name:'Color Balancing S', price: '7300/8500 руб.',stat:false },
        { name:'Color Balancing M', price: '9500/11000 руб.',stat:false },
        { name:'Color Balancing L', price: '12500/15000 руб.',stat:false },
        { name:'Color Balancing XL', price: '16500/18500 руб.',stat:false },
        { name:'Color Balancing XXL', price: '19800/22500 руб.',stat:false },
        { name: '', price: 'KEUNE',stat:true },
        { name:'Тонирование волос 1/2 головы', price: '3300 руб.',stat:false },
        { name:'Тонирование волос S', price: '5500 руб.',stat:false },
        { name:'Тонирование волос M', price: '6800 руб.',stat:false },
        { name:'Тонирование волос L', price: '9800 руб.',stat:false },
        { name:'Тонирование волос XL', price: '12500 руб.',stat:false },
        { name:'Тонирование волос XXL', price: '15800 руб.',stat:false },
      ]
    },
    {
      id: 11,
      title: 'Доп услуги',
      expand: expanded11,
      items: [
        { name: 'Удаление нежелательного оттенка/декапирование S', price: '3300 руб.',stat:false },
        { name: 'Удаление нежелательного оттенка/декапирование M', price: '4600 руб.',stat:false },
        { name: 'Удаление нежелательного оттенка/декапирование L', price: '7800 руб.',stat:false },
        { name: 'Удаление нежелательного оттенка/декапирование XL', price: '10000 руб.',stat:false },
        { name: 'Препигментация 1 (20гр)', price: '1700/2400 руб.',stat:false },
        { name: 'Препигментация 2 (30гр)', price: '2500/3100 руб.',stat:false },
        { name: 'Препигментация 3 (40гр)', price: '3300/3700 руб.',stat:false },
      ]
    },
    {
        id: 10,
        title: 'Рассветление',
        expand: expanded10,
        items: [
            { name: 'Ультра Блонд 3000+ Tinta окрашивание корней', price: '7800 руб.',stat:false },
            { name: 'Ультра Блонд 3000+ Tinta S', price: '13000 руб.',stat:false },
            { name: 'Ультра Блонд 3000+ Tinta M', price: '17000 руб.',stat:false },
            { name: 'Ультра Блонд 3000+ Tinta L', price: '25000 руб.',stat:false },
            { name: 'Ультра Блонд 3000+ Tinta XL', price: '32500 руб.',stat:false },
            { name: '', price: '',stat:true },
            { name: 'Ультра Блонд 2000 Tinta окрашивание корней', price: '7000 руб.',stat:false },
            { name: 'Ультра Блонд 2000 Tinta S', price: '9500 руб.',stat:false },
            { name: 'Ультра Блонд 2000 Tinta M', price: '12500 руб.',stat:false },
            { name: 'Ультра Блонд 2000 Tinta L', price: '16500 руб.',stat:false },
            { name: 'Ультра Блонд 2000 Tinta XL', price: '22000 руб.',stat:false },
            { name: '', price: 'KEUNE',stat:true },
            { name: 'Обесцвечивание волос S', price: '5000 руб.',stat:false },
            { name: 'Обесцвечивание волос M', price: '6500 руб.',stat:false },
            { name: 'Обесцвечивание волос L', price: '7500 руб.',stat:false },
            { name: 'Обесцвечивание волос XL', price: '8500 руб.',stat:false },
            { name: 'Обесцвечивание волос XXL', price: '14000 руб.',stat:false },
            { name: '', price: '',stat:true },
            { name: 'Блики (до 10 прядей)', price: '5000 руб.',stat:false },
            { name: 'Мелирование волос S', price: '7000 руб.',stat:false },
            { name: 'Мелирование волос M', price: '9500 руб.',stat:false },
            { name: 'Мелирование волос L', price: '13000 руб.',stat:false },
            { name: 'Мелирование волос XL', price: '15500 руб.',stat:false },
            { name: 'Мелирование волос XXL', price: '17500 руб.',stat:false },
            { name: '', price: '',stat:true },
            { name: 'Блики красителем Tinto XS', price: '6000 руб.',stat:false },
            { name: 'Мелирование волос красителем Tinto S', price: '8500 руб.',stat:false },
            { name: 'Мелирование волос красителем Tinto M', price: '11000 руб.',stat:false },
            { name: 'Мелирование волос красителем Tinto L', price: '14500 руб.',stat:false },
            { name: 'Мелирование волос красителем Tinto XL', price: '17000 руб.',stat:false },
        ]
    },
    {
      id: 13,
      title: 'Техники',
      expand: expanded13,
      items: [
        { name: 'Шатуш/Балаяж/Air Touch M', price: '22000/25000 руб.',stat:false },
        { name: 'Шатуш/Балаяж/Air Touch L', price: '26000/29000 руб.',stat:false },
        { name: 'Шатуш/Балаяж/Air Touch XL', price: '32500/35500 руб.',stat:false },
      ]
    },


  ];
  
  const priceMakeData = [
    {
      id: 12,
      title: 'Услуги визажиста-бровиста',
      expand: expanded12,
      items: [
        { name: 'Макияж', price: '5000 руб.',stat:false },
        { name: 'Коррекция бровей', price: '1500 руб.',stat:false },
        { name: 'Окрашивание бровей', price: '1500 руб.',stat:false },
        { name: 'Архитектура бровей (окрашивание+коррекция)', price: '2500 руб.',stat:false },
        { name: 'Ламинирование бровей + окрашивание бровей', price: '4000 руб.',stat:false },
        { name: 'Коллагенирование бровей + окрашивание бровей', price: '4500 руб.',stat:false },
        { name: 'Окрашивание ресниц', price: '1200 руб.',stat:false },
        { name: 'Ламинирование ресниц + окрашивание ресниц', price: '5000 руб.',stat:false },
        { name: 'Коллагенирование ресниц + окрашивание ресниц', price: '5500 руб.',stat:false },
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
