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
            <div className='pr-menu'>
            <div className={`menu-12 ${expanded12 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(12)}>
                    <h2>Услуги визажиста</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Макияж дневной повседневный - BUSINESS LADY</a><a className='pr-list-price'>2500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Макияж коктейльный - PARTY GIRL</a><a className='pr-list-price'>2500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Макияж вечерний - NIGHT PARTY</a><a className='pr-list-price'>2800 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Макияж возрасной- ANTI-AGE</a><a className='pr-list-price'>3000 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Макияж пробный свадебный- TEST MARRIDE DAY</a><a className='pr-list-price'>2800 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Макияж свадебный- MARRIDE DAY</a><a className='pr-list-price'>3800 руб.</a></div>
                </div> 
            </div>
            </div>
            <div className='pr-menu'>
            <div className={`menu-13 ${expanded13 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(13)}>
                    <h2>Услуги бровиста</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Коррекция бровей (раннее созданной формы)</a><a className='pr-list-price'>750 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Создание новой формы бровей</a><a className='pr-list-price'>1500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Окрашивание бровей ХНА</a><a className='pr-list-price'>1500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Окрашивание бровей краска</a><a className='pr-list-price'>850 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Ламинирование бровей</a><a className='pr-list-price'>3800 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Счастье для бровей</a><a className='pr-list-price'>1200 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Окрашивание ресниц</a><a className='pr-list-price'>800 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Ламинирование ресниц</a><a className='pr-list-price'>4200 руб.</a></div>
                </div> 
            </div>
            </div>
            </div>}
            {showContent1 && <div>
            <div className='pr-menu'>
            <div className={`menu-1 ${expanded1 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible'  onClick={() => toggleExpand(1)}>
                    <h2>Укладка</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Укладка мужская</a><a className='pr-list-price'>1000 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Сушка волос феном S/M/L/XL</a><a className='pr-list-price'>1000/ 1100/ 1200/ 1400 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Укладка женская S/M/L/XL</a><a className='pr-list-price'>1600/ 1800/ 2000/ 2300 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Укладка Коктейльная Cloud Nine S/M/L/XL</a><a className='pr-list-price'>2100/2900/3300/3600 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Укладка празничная S/M/L/XL</a><a className='pr-list-price'>2100/ 3500/ 3900/ 4600 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Укладка нарощенных волос</a><a className='pr-list-price'>2800 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Эксперсс плетение косы</a><a className='pr-list-price'>1200 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Декоротивное плетение косы</a><a className='pr-list-price'>2600 руб.</a></div>
                </div>
            </div>
        </div>

        <div className='pr-menu'>
            <div className={`menu-2 ${expanded2 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(2)}>
                    <h2>Стрижка</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Стрижка женская + укладка S/M/L/XL + сенсуалирование волос</a><a className='pr-list-price'>2800/ 3000/ 3200/ 3500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Стрижка с укладкой Креативная/Авторская</a><a className='pr-list-price'>3500/ 4000 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Коррекций челки</a><a className='pr-list-price'>800 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Создание новой челки</a><a className='pr-list-price'>1500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Стрижка детская до 12 лет/ подростковая</a><a className='pr-list-price'>1500/ 2000 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Стрижка мужская + укладка</a><a className='pr-list-price'>2500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Стрижка мужская креативная + укладка</a><a className='pr-list-price'>3300 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Стрижка мужская машинкой</a><a className='pr-list-price'>1500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Дизайн бороды</a><a className='pr-list-price'>1000 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Дизайн усов</a><a className='pr-list-price'>800 руб.</a></div>
                </div>            
            </div>
        </div>


        <div className='pr-menu'>
            <div className={`menu-3 ${expanded3 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(3)}>
                    <h2>Окрашивание</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Коррекция седины Men Reshade (1фл./20мл.)/(2фл./40мл.)</a><a className='pr-list-price'>3400/ 6600 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Окрашивание волос в 1 тон SO PURE - S/M/L/XL</a><a className='pr-list-price'>7000/ 10200/ 13500/ 16500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Окрашивание волос в 1 тон KEUNE S/M/L/XL</a><a className='pr-list-price'>6000/ 7700/ 11500/ 13800 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>АНИМАЦИЯ ЦВЕТА @PURE PIGMENTS GW</a><a className='pr-list-price'>500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Color Balancing KEUNE - S/M/L/XL</a><a className='pr-list-price'>7100/ 8300/ 10500/ 12600 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Color Balancing SO PURE - S/M/L/XL</a><a className='pr-list-price'>8600/ 9700/ 12200/ 14500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Тонирование волос KEUNE - S/M/L/XL/XLL</a><a className='pr-list-price'>4500/ 5800/ 8300/ 10800/ 13500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Тонирование волос SO PURE - S/M/L/XL/XLL</a><a className='pr-list-price'>5500/ 7500/ 10600/ 14100/ 16000 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Колорирование волос KEUNE- S/M/L/XL</a><a className='pr-list-price'>7200/ 9300/ 13600/ 16200 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Колорирование волос SO PURE - S/M/L/XL</a><a className='pr-list-price'>8600/ 12000/ 15000/ 18000 руб.</a></div>
                </div>                
            </div>
        </div>

        <div className='pr-menu'>
            <div className={`menu-4 ${expanded4 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(4)}>
                    <h2>Рассветление</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Ультра Блонд 3000+ Tinta-S/M/L/XL</a><a className='pr-list-price'>7800/ 16500/ 25100/ 32500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Обесцвечивание волос KEUNE - S/M/L/XL</a><a className='pr-list-price'>4500/ 5500/ 6800/ 7600 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Блики (мелирование нескольких прядей)</a><a className='pr-list-price'>4500руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Прикорневое мелирование волос</a><a className='pr-list-price'>6000руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Мелирование волос S S/M/L/XL</a><a className='pr-list-price'>6000/ 7000/ 9500/ 11800 руб.</a></div>
                </div>  
            </div>
        </div>
        <div className='pr-menu'>
            <div className={`menu-5 ${expanded5 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(5)}>
                    <h2>Элюмирование</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Элюминирование в 1 тон -S/M/L/XL</a><a className='pr-list-price'>7000/ 96500/ 12100/ 15600руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Элюминирование Color Balancing (окрашивание корней и тонирование по длине ) S/M/L/XL</a><a className='pr-list-price'>11400/ 14000/ 16700/ 18500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Снятие Элюмен RETURN -S/M/L/XL</a><a className='pr-list-price'>3000/ 4600/ 6400/ 7400 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Снятие Элюмен ERASER -S/M/L/XL</a><a className='pr-list-price'>3000/ 3500/ 6100/ 6600 руб.</a></div>
                </div>  
            </div>
        </div>
        <div className='pr-menu'>
            <div className={`menu-6 ${expanded6 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(6)}>
                    <h2>Лечение и спа</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Лечебная сенсуалирующая маска/Экспресс уход</a><a className='pr-list-price'>600 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Лечение волос BondPro</a><a className='pr-list-price'>2500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Окрашивание волос + лечением BondPro S/M</a><a className='pr-list-price'>2000 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Окрашивание волос + лечением BondPro L/XL</a><a className='pr-list-price'>2300 руб.</a></div>

                    <div className='pr-line'><h3>Lebel</h3></div>
                    <div className='pr-line'><a className='pr-list-name'>SPA-программа «Hair Skin Relaxing» S/M/L/XL</a><a className='pr-list-price'>2100/ 3000/ 3700/ 4700 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Счастье для волос ЖИЗНЕННАЯ СИЛА S/M/L/XL</a><a className='pr-list-price'>2000/ 3000/ 4000/ 5400 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Абсолютное счастье для волос S/M/L/XL</a><a className='pr-list-price'>2000/ 3000/ 4000/ 5400 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Счастье для волос БЛЕСК и СИЛА S/M/L/XL</a><a className='pr-list-price'>3000/ 5500/ 7500/ 10000 руб.</a></div>
                    <div className='pr-line'><h3>So pure</h3></div>

                    <div className='pr-line'><a className='pr-list-name'>СПА-уход SO PURE - S/M/L/XL</a><a className='pr-list-price'>1100/ 1500/ 2100/ 2500 руб.</a></div>

                </div>             
            </div>
        </div>
        <div className='pr-menu'>
            <div className={`menu-7 ${expanded7 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(7)}>
                    <h2>Трихология</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Детокс-пилинг д/кожи головы MEDAVITA (П25/Ш20/Э15/без ампулы)</a><a className='pr-list-price'>2000 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Программа против выпадения волос MEDAVITA (пилинг+ампула)</a><a className='pr-list-price'>3500 руб.</a></div>
                </div> 
            </div>
        </div>
        <div className='pr-menu'>
            <div className={`menu-8 ${expanded8 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(8)}>
                    <h2>Техники</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Брондирование Омбре- S/M/L/XL</a><a className='pr-list-price'>11500/ 14000/ 17000/ 18500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Брондирование Шатуш - S/M/L/XL</a><a className='pr-list-price'>12000/ 15000/ 17000/ 21000 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Окрашивание Аиртач - М/L/XL</a><a className='pr-list-price'>16500/ 19500/ 24000 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Окрашивание Airtouch - М/L/XL</a><a className='pr-list-price'>17000/ 20000/ 25000 руб.</a></div>
                </div> 
            </div>
        </div>
        <div className='pr-menu'>
            <div className={`menu-9 ${expanded9 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(9)}>
                    <h2>Выпрямление</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div> 
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Кератиновое выпрямление/восстановление волос -S/M/L/XL</a><a className='pr-list-price'>6500/ 8500/ 11000/ 13500 руб.</a></div>
                </div>
            </div>
        </div>
        <div className='pr-menu'>
            <div className={`menu-10 ${expanded10 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(10)}>
                    <h2>Завивка</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Щадящая химическая завивка Evolution - S/M/L</a><a className='pr-list-price'>8500/ 9700/ 17600 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Мягкая щелочная завивка-уход VITENSITY - S/M/L</a><a className='pr-list-price'>5200/ 7100/ 11000 руб.</a></div>
                </div>
            </div>
        </div>
        <div className='pr-menu'>
            <div className={`menu-11 ${expanded11 ? 'expanded' : ''}`}>
                <div className='pr-menu-visible' onClick={() => toggleExpand(11)}>
                    <h2>Доп услуги</h2>
                    <button><img src={arrowbottomImg}/></button>
                </div>
                <div className='pr-hair-full-price'>
                    <div className='pr-line'><a className='pr-list-name'>Удаление нежелательного оттенка/декапирование S/M/L/XL</a><a className='pr-list-price'>3300/ 4000/ 6500/ 8500 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Препигментация 1 (20гр)</a><a className='pr-list-price'>1700/ 2400 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Препигментация 2 (30гр)</a><a className='pr-list-price'>2500/ 3100 руб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>Препигментация 3 (40гр)</a><a className='pr-list-price'>3300/ 3700 pуб.</a></div>
                    <div className='pr-line'><a className='pr-list-name'>3300/3700 pуб.</a><a className='pr-list-price'>1100/ 1300/ 1600/ 2000 руб.</a></div>
                </div>
            </div>
        </div></div>}
        </div>
    </div>
  </div>
    );
  };


export default Salon;
