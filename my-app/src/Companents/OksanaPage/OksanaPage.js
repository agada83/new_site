import React, { Component } from 'react';
import oksanaImg from '../../assets/Oksana2.png'
import workImg1 from '../../assets/work1.png';
import './OksanaPage.css';
import { HashLink } from 'react-router-hash-link';

class OksanaPage extends Component {
    render() {
        return (
            <div className='opg-box'>
                <div className='opg-prof'>
                    <img src={oksanaImg} />
                    <div className='opg-kostil1'>
                        <div className='opg-prof-text'>
                            <h1>ОКСАНА МАКАЛКИНА</h1>
                            <p className='opg-bold'>Топ-Стилист</p>
                            <p>Оксана</p>
                            <p>Опыт работы: 15 лет</p>
                            <p>Опытный специалист по стойкому выпрямлению волос, профессионально подберет форму стрижки, посоветует модные направления</p>
                        </div>
                        <div className='opg-button'>
                            <HashLink to='/#redistration'>
                                <button>Записаться</button>
                            </HashLink>
                        </div>
                    </div>
                </div>
                <div className='opg-about'>
                    <h1>О МАСТЕРЕ</h1>
                    <div className='opg-general-info'>
                        <div className='opg-hr'><h1>Общая информация</h1><div><hr/></div></div>
                        <div className='opg-ul'>
                            <ul>
                                <li>более 20-ти лет в профессии</li>
                                <li>прошла десятки модных обучений, призер престижных конкурсов, участник«Недели Высокой Моды»</li>
                                <li>виртуозно владеет техниками растяжек и Аиртач</li>
                                <li>обладает превосходным чувством «стиля и цвета»</li>
                                <li>профессионально подберет форму стрижки, посоветует модные направления</li>
                                <li>опытный специалист по стойкому выпрямлению волос</li>
                            </ul>
                        </div>
                        <div className='opg-hr'><h1>Услуги оказываемые мастером</h1><div><hr/></div></div>
                        <div className='opg-services'>
                            <div className='opg-services-item'>
                                <a>Замечательная услуга 1</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='opg-services-item'>
                                <a>Замечательная услуга 2</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='opg-services-item'>
                                <a>Замечательная услуга 3</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='opg-services-item'>
                                <a>Замечательная услуга 4</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='opg-services-item'>
                                <a>Замечательная услуга 5</a>
                                <a>от XX00 руб.</a>
                            </div>
                            <div className='opg-services-item'>
                                <a>Замечательная услуга 6</a>
                                <a>от XX00 руб.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='opg-portfolio'>
                    <h1>ПОРТФОЛИО</h1>
                    <div className='opg-works'>
                        <div className='opg-row'><img src={workImg1} alt=''/><img src={workImg1} alt=''/><img src={workImg1} alt=''/></div>
                        <div className='opg-row'><img src={workImg1} alt=''/><img src={workImg1} alt=''/><img src={workImg1} alt=''/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OksanaPage;