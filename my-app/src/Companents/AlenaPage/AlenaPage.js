import React, { Component } from 'react';
import veraImg from '../../assets/Alena.jpg';
import workImg1 from '../../assets/work1.png';
import './AlenaPage.css';
import { HashLink } from 'react-router-hash-link';

class AlenaPage extends Component {
    render() {
        return (
            <div className='alp-box'>
                <div className='alp-prof'>
                    <img src={veraImg} />
                    <div className='alp-kostil1'>
                        <div className='alp-prof-text'>
                            <h1>АЛЕНА ГАЛАН</h1>
                            <p className='alp-bold'>Визажист</p>
                            <p>Опыт работы: 11 лет</p>
                            <p>Выполнение любого вида макияжа, оформление бровей (окрашивание и коррекция), ламинирование бровей и ресниц. Несложный пластический грим.</p>
                        </div>
                        <div className='alp-button'>
                            <HashLink to='/#registration' smooth='boolean'>
                                <button>Записаться</button>
                            </HashLink>
                        </div>
                    </div>
                </div>
                <div className='alp-about'>
                    <h1>О МАСТЕРЕ</h1>
                    <div className='alp-general-info'>
                        <div className='alp-hr'><h1>Общая информация</h1><div><hr/></div></div>
                        <div className='alp-ul'>
                            <ul>
                                <li>опыт работы 11 лет: на съёмках, показах, фотосессиях</li>
                                <li>работа с селебрити: Юлианна Караулова, Алла Михеева, Влад Топалов, Мария Миногарова, также, ведущие, блогеры. </li>
                                <li>работа с журналами: Grazia, Cosmopolitan, Wedding by Mercury, РБК</li>
                                <li>выполнение любого вида макияжа, оформление бровей (окрашивание и коррекция), ламинирование бровей и ресниц. несложный пластический грим. </li>
                            </ul>
                        </div>
                        <div className='alp-hr'><h1>Услуги оказываемые мастером</h1><div><hr/></div></div>
                        <div className='alp-services'>
                            <div className='alp-services-item'>
                                <a>Замечательная услуга 1</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='alp-services-item'>
                                <a>Замечательная услуга 2</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='alp-services-item'>
                                <a>Замечательная услуга 3</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='alp-services-item'>
                                <a>Замечательная услуга 4</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='alp-services-item'>
                                <a>Замечательная услуга 5</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='alp-services-item'>
                                <a>Замечательная услуга 6</a>
                                <a>от XX00 руб.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='alp-portfolio'>
                    <h1>ПОРТФОЛИО</h1>
                    <div className='alp-works'>
                        <div className='alp-row'><img src={workImg1} alt=''/><img src={workImg1} alt=''/><img src={workImg1} alt=''/></div>
                        <div className='alp-row'><img src={workImg1} alt=''/><img src={workImg1} alt=''/><img src={workImg1} alt=''/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlenaPage;