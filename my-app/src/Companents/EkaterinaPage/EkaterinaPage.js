import React, { Component } from 'react';
import ekaterinaImg from '../../assets/Ekaterina.jpg';
import workImg1 from '../../assets/worksImg/ektWork1.jpg';
import workImg2 from '../../assets/worksImg/ektWork2.jpg';
import workImg3 from '../../assets/worksImg/ektWork3.jpg';
import './EkaterinaPage.css';
import { HashLink } from 'react-router-hash-link';

class EkaterinaPage extends Component {
    render() {
        return (
            <div className='ekp-box'>
                <div className='ekp-prof'>
                    <img src={ekaterinaImg} />
                    <div className='ekp-kostil1'>
                        <div className='ekp-prof-text'>
                            <h1>ЕКАТЕРИНА ЛОСЕВА</h1>
                            <p className='ekp-bold'>Топ-Стилист</p>
                            <p>Опыт работы: 20 лет</p>
                            <p>Профисиональный мастер-универсал, выполнит стрижки и укладки любой сложности. Многократный призёр конкурсов и чемпионатов по парикмахерскому искусству.</p>
                        </div>
                        <div className='ekp-button'>
                            <HashLink to='/#registration' smooth='boolean'>
                                <button>Записаться</button>
                            </HashLink>
                        </div>
                    </div>
                </div>
                <div className='ekp-about'>
                    <h1>О МАСТЕРЕ</h1>
                    <div className='ekp-general-info'>
                        <div className='ekp-hr'><h1>Общая информация</h1><div><hr/></div></div>
                        <div className='ekp-ul'>
                            <ul>
                                <li>более 20-ти лет в профессии</li>
                                <li>«сильный» мастер-универсал, выполнит стрижки и укладки любой сложности</li>
                                <li>многократный призёр конкурсов и чемпионатов по парикмахерскому искусству</li>
                                <li>профессионально работает со сложными, густыми волосами</li>
                                <li>исправляет чужие ошибки в окрашивании</li>
                                <li>специалист блонд -тонов, колорист высокого уровня</li>
                            </ul>
                        </div>
                        <div className='ekp-hr'><h1>Услуги оказываемые мастером</h1><div><hr/></div></div>
                        <div className='ekp-services'>
                            <div className='ekp-services-item'>
                                <a>Замечательная услуга 1</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='ekp-services-item'>
                                <a>Замечательная услуга 2</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='ekp-services-item'>
                                <a>Замечательная услуга 3</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='ekp-services-item'>
                                <a>Замечательная услуга 4</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='ekp-services-item'>
                                <a>Замечательная услуга 5</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='ekp-services-item'>
                                <a>Замечательная услуга 6</a>
                                <a>от XX00 руб.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ekp-portfolio'>
                    <h1>ПОРТФОЛИО</h1>
                    <div className='ekp-works'>
                        <div className='ekp-row'><img src={workImg1} alt=''/><img src={workImg2} alt=''/><img src={workImg3} alt=''/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EkaterinaPage;