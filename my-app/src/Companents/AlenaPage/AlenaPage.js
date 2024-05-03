import React, { Component } from 'react';
import veraImg from '../../assets/Alena.jpg';
import workImg1 from '../../assets/worksImg/alWork1.jpeg';
import workImg2 from '../../assets/worksImg/alWork2.jpeg';
import workImg3 from '../../assets/worksImg/alWork3.jpeg';
import './AlenaPage.css';
import { HashLink } from 'react-router-hash-link';

class AlenaPage extends Component {
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
            <div className='alp-box'>
                <div className='alp-prof'>
                    <img src={veraImg} />
                    <div className='alp-kostil1'>
                        <div className='alp-prof-text'>
                            <h1>АЛЕНА ГАЛАН</h1>
                            <p className='alp-bold'>Визажист</p>
                            <p>Опыт работы: 11 лет</p>
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
                                <a>Макияж</a>
                                <a>от 2900 руб.</a>
                            </div>
                            <div className='alp-services-item'>
                                <a>Коррекция бровей</a>
                                <a>от 750 руб.</a>
                            </div>
                            <div className='alp-services-item'>
                                <a>Окрашивание бровей</a>
                                <a>от 1200 руб.</a>
                            </div>
                            <div className='alp-services-item'>
                                <a>Окрашивание ресниц</a>
                                <a>от 800 руб.</a>
                            </div>
                            <div className='alp-services-item'>
                                <a>Ламинирование ресниц</a>
                                <a>от 4200 руб.</a>
                            </div>
                            <div className='alp-services-item'>
                                <a>Макияж-обучение</a>
                                <a>от 8000 руб.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='alp-portfolio'>
                    <h1>ПОРТФОЛИО</h1>
                    <div className='alp-works'>
                        <div className='alp-row'><img src={workImg1} alt=''/><img src={workImg2} alt=''/><img src={workImg3} alt=''/></div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='alpmb-box'>
            <div className='alpmb-prof'>
                <img src={veraImg} />
                <div className='alpmb-prof-text'>
                    <h1>АЛЕНА ГАЛАН</h1>
                    <p className='alpmb-bold'>Визажист</p>
                    <p>Опыт работы: 11 лет</p>
                </div>
            </div>
            <div className='alpmb-button'>
                <HashLink to='/#registration' smooth='boolean'>
                    <button>Записаться</button>
                </HashLink>
            </div>
            <div className='alpmb-about'>
                <h1>О МАСТЕРЕ</h1>
                <div className='alpmb-general-info'>
                    <div className='alpmb-subtitle'><h1>Общая информация</h1></div>
                    <div className='alpmb-ul'>
                        <ul>
                            <li>опыт работы 11 лет: на съёмках, показах, фотосессиях</li>
                            <li>работа с селебрити: Юлианна Караулова, Алла Михеева, Влад Топалов, Мария Миногарова, также, ведущие, блогеры. </li>
                            <li>работа с журналами: Grazia, Cosmopolitan, Wedding by Mercury, РБК</li>
                            <li>выполнение любого вида макияжа, оформление бровей (окрашивание и коррекция), ламинирование бровей и ресниц. несложный пластический грим. </li>
                        </ul>
                    </div>
                    <div className='alpmb-subtitle'><h1>Услуги оказываемые мастером</h1></div>
                    <div className='alpmb-services'>
                        <div className='alpmb-services-item'>
                            <a>Замечательная услуга 1</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='alpmb-services-item'>
                            <a>Замечательная услуга 2</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='alpmb-services-item'>
                            <a>Замечательная услуга 3</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='alpmb-services-item'>
                            <a>Замечательная услуга 4</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='alpmb-services-item'>
                            <a>Замечательная услуга 5</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='alpmb-services-item'>
                            <a>Замечательная услуга 6</a>
                            <a>от XX00 руб.</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='alpmb-portfolio'>
                <h1>ПОРТФОЛИО</h1>
                <div className='alpmb-works'>
                    <div className='alpmb-row'><img src={workImg1} alt=''/><img src={workImg1} alt=''/></div>
                    <div className='alpmb-row'><img src={workImg1} alt=''/></div>
                </div>
            </div>
        </div>        )
    }}
}

export default AlenaPage;