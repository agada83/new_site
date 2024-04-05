import React, { Component } from 'react';
import oksanaImg from '../../assets/Oksana2.png'
import workImg1 from '../../assets/worksImg/oksWork2.jpg';
import workImg2 from '../../assets/worksImg/oksWork4.jpg';
import workImg3 from '../../assets/worksImg/oksWork3.jpg';
import './OksanaPage.css';
import { HashLink } from 'react-router-hash-link';

class OksanaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth
        };
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ windowWidth: window.innerWidth });
    };
      scrollToTopServices = () => {
        const topServicesElement = document.getElementById('top-services');
        if (topServicesElement) {
           topServicesElement.scrollIntoView({ behavior: 'smooth' });
        }
     };    
        render() {
          const { windowWidth } = this.state;
    
        if (windowWidth > 768) {
          return (
            <div className='opg-box'>
                <div className='opg-prof'>
                    <img src={oksanaImg} />
                    <div className='opg-kostil1'>
                        <div className='opg-prof-text'>
                            <h1>ОКСАНА МАКАЛКИНА</h1>
                            <p className='opg-bold'>Топ-Стилист</p>
                            <p>Опыт работы: 15 лет</p>
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
                        <div className='opg-row'><img src={workImg1} alt=''/><img src={workImg2} alt=''/><img src={workImg3} alt=''/></div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='opgmb-box'>
            <div className='opgmb-prof'>
                <img src={oksanaImg} />
                <div className='opgmb-prof-text'>
                <h1>ОКСАНА МАКАЛКИНА</h1>
                <p className='opgmb-bold'>Топ-Стилист</p>
                <p>Опыт работы: 15 лет</p>
            </div>
            </div>
            <div className='opgmb-button'>
                <HashLink to='/#registration' smooth='boolean'>
                    <button>Записаться</button>
                </HashLink>
            </div>
            <div className='opgmb-about'>
                <h1>О МАСТЕРЕ</h1>
                <div className='opgmb-general-info'>
                    <div className='opgmb-subtitle'><h1>Общая информация</h1></div>
                    <div className='opgmb-ul'>
                        <ul>
                            <li>более 20-ти лет в профессии</li>
                            <li>прошла десятки модных обучений, призер престижных конкурсов, участник«Недели Высокой Моды»</li>
                            <li>виртуозно владеет техниками растяжек и Аиртач</li>
                            <li>обладает превосходным чувством «стиля и цвета»</li>
                            <li>профессионально подберет форму стрижки, посоветует модные направления</li>
                            <li>опытный специалист по стойкому выпрямлению волос</li>
                        </ul>
                    </div>
                    <div className='opgmb-subtitle'><h1>Услуги оказываемые мастером</h1></div>
                    <div className='opgmb-services'>
                        <div className='opgmb-services-item'>
                            <a>Замечательная услуга 1</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='opgmb-services-item'>
                            <a>Замечательная услуга 2</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='opgmb-services-item'>
                            <a>Замечательная услуга 3</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='opgmb-services-item'>
                            <a>Замечательная услуга 4</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='opgmb-services-item'>
                            <a>Замечательная услуга 5</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='opgmb-services-item'>
                            <a>Замечательная услуга 6</a>
                            <a>от XX00 руб.</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='opgmb-portfolio'>
                <h1>ПОРТФОЛИО</h1>
                <div className='opgmb-works'>
                    <div className='opgmb-row'><img src={workImg1} alt=''/><img src={workImg2} alt=''/></div>
                    <div className='opgmb-row'><img src={workImg3} alt=''/></div>
                </div>
            </div>
        </div>        )
    }}
}

export default OksanaPage;