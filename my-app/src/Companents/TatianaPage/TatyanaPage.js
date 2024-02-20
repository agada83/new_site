import React, { Component } from 'react';
import veraImg from '../../assets/Tatyana.jpg';
import workImg1 from '../../assets/worksImg/tWork1.jpg';
import workImg2 from '../../assets/worksImg/tWork2.jpg';
import workImg3 from '../../assets/worksImg/tWork3.jpg';
import './TatyanaPage.css';
import { HashLink } from 'react-router-hash-link';

class TatyanaPage extends Component {
    render() {
        return (
            <div className='ttp-box'>
                <div className='ttp-prof'>
                    <img src={veraImg} />
                    <div className='ttp-kostil1'>
                        <div className='ttp-prof-text'>
                            <h1>ТАТЬЯНА КАРРУЭБАНО</h1>
                            <p className='ttp-bold'>Арт-директор</p>
                            <p>Опыт работы: 20 лет</p>
                            <p>Арт-директор и идейный вдохновитель beauty-проекта «TINTO». Мастер, который «слышит» клиента и приведет к оптимальному результату.</p>
                        </div>
                        <div className='ttp-button'>
                            <HashLink to='/#registration' smooth='boolean'>
                                <button>Записаться</button>
                            </HashLink>
                        </div>
                    </div>
                </div>
                <div className='ttp-about'>
                    <h1>О МАСТЕРЕ</h1>
                    <div className='ttp-general-info'>
                        <div className='ttp-hr'><h1>Общая информация</h1><div><hr/></div></div>
                        <div className='ttp-ul'>
                            <ul>
                                <li>более 20-ти лет непрерывного стажа</li>
                                <li>Арт-директор и идейный вдохновитель beauty-проекта «TINTO»</li>
                                <li>мастер, который «слышит» клиента и приведет к оптимальному результату</li>
                                <li>развернутая профессиональная консультация и подбор программы по восстановлению и уходу за волосами и кожей головы</li>
                                <li>отработанные до автоматизма академические знания собранные в лучших школах мира</li>
                                <li>уникальное владение техникой японского массажа головы</li>
                                <li>специалист по локонам и химическим завивкам любой сложности</li>
                            </ul>
                        </div>
                        <div className='ttp-hr'><h1>Услуги оказываемые мастером</h1><div><hr/></div></div>
                        <div className='ttp-services'>
                            <div className='ttp-services-item'>
                                <a>Замечательная услуга 1</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='ttp-services-item'>
                                <a>Замечательная услуга 2</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='ttp-services-item'>
                                <a>Замечательная услуга 3</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='ttp-services-item'>
                                <a>Замечательная услуга 4</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='ttp-services-item'>
                                <a>Замечательная услуга 5</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='ttp-services-item'>
                                <a>Замечательная услуга 6</a>
                                <a>от XX00 руб.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ttp-portfolio'>
                    <h1>ПОРТФОЛИО</h1>
                    <div className='ttp-works'>
                        <div className='ttp-row'><img src={workImg1} alt=''/><img src={workImg2} alt=''/><img src={workImg3} alt=''/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TatyanaPage;