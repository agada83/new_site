import React, { Component } from 'react';
import veraImg from '../../assets/Vera.jpg';
import workImg1 from '../../assets/worksImg/vWork1.jpg';
import workImg2 from '../../assets/worksImg/vWork2.jpg';
import workImg3 from '../../assets/worksImg/vWork3.jpg';
import './VeraPage.css';
import { HashLink } from 'react-router-hash-link';

class VeraPage extends Component {
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

            <div className='vrp-box'>
                <div className='vrp-prof'>
                    <img src={veraImg} />
                    <div className='vrp-kostil1'>
                        <div className='vrp-prof-text'>
                            <h1>ВЕРА МАРЫЧЕВА</h1>
                            <p className='vrp-bold'>Топ-Стилист</p>
                            <p>Опыт работы: 20 лет</p>
                            <p>Опытный мастер, обладающий более чем 20-летним стажем в профессии. Воплотит ваши пожелания и внесет в образ модные «фишки» и тренды. Прошла обучение в самых престижных мировых школах: VidalSassoon, UweBreuer, Doloresи др.</p>
                        </div>
                        <div className='vrp-button'>
                            <HashLink to='/#registration' smooth='boolean'>
                                <button>Записаться</button>
                            </HashLink>
                        </div>
                    </div>
                </div>
                <div className='vrp-about'>
                    <h1>О МАСТЕРЕ</h1>
                    <div className='vrp-general-info'>
                        <div className='vrp-hr'><h1>Общая информация</h1><div><hr/></div></div>
                        <div className='vrp-ul'>
                            <ul>
                                <li>более 20-ти лет в профессии</li>
                                <li>находит подход к любому клиенту</li>
                                <li>воплощает пожелания клиента, вносит в образ модные «фишки» и тренды</li>
                                <li>за её плечами тысячи идеально промилированных волос</li>
                                <li>технично выполнит стрижку и исправит чужие ошибки</li>
                                <li>прошла обучение в самых престижных мировых школах: VidalSassoon, UweBreuer, Doloresи др.</li>
                            </ul>
                        </div>
                        <div className='vrp-hr'><h1>Услуги оказываемые мастером</h1><div><hr/></div></div>
                        <div className='vrp-services'>
                        <div className='vrp-services-item'>
                                <a>Укладка</a>
                                <a>от 1000 руб.</a>
                            </div>
                            <div className='vrp-services-item'>
                                <a>Стрижка</a>
                                <a>от 2500 руб.</a>
                            </div>
                            <div className='vrp-services-item'>
                                <a>Окрашивание</a>
                                <a>от 6000 руб.</a>
                            </div>
                            <div className='vrp-services-item'>
                                <a>Элюминирование</a>
                                <a>от 7000 руб.</a>
                            </div>
                            <div className='vrp-services-item'>
                                <a>Рассветление</a>
                                <a>от 4500 руб.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='vrp-portfolio'>
                    <h1>ПОРТФОЛИО</h1>
                    <div className='vrp-works'>
                        <div className='vrp-row'><img src={workImg1} alt=''/><img src={workImg2} alt=''/><img src={workImg3} alt=''/></div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='vrpmb-box'>
            <div className='vrpmb-prof'>
                <img src={veraImg} />
                <div className='vrpmb-prof-text'>
                <p className='vrpmb-bold'>Топ-Стилист</p>
                            <p>Опыт работы: 20 лет</p>
                            <p>Опытный мастер, обладающий более чем 20-летним стажем в профессии. Воплотит ваши пожелания и внесет в образ модные «фишки» и тренды. Прошла обучение в самых престижных мировых школах: VidalSassoon, UweBreuer, Doloresи др.</p>
            </div>
            </div>
            <div className='vrpmb-button'>
                <HashLink to='/#registration' smooth='boolean'>
                    <button>Записаться</button>
                </HashLink>
            </div>
            <div className='vrpmb-about'>
                <h1>О МАСТЕРЕ</h1>
                <div className='vrpmb-general-info'>
                    <div className='vrpmb-subtitle'><h1>Общая информация</h1></div>
                    <div className='vrpmb-ul'>
                        <ul>
                        <li>более 20-ти лет в профессии</li>
                                <li>находит подход к любому клиенту</li>
                                <li>воплощает пожелания клиента, вносит в образ модные «фишки» и тренды</li>
                                <li>за её плечами тысячи идеально промилированных волос</li>
                                <li>технично выполнит стрижку и исправит чужие ошибки</li>
                                <li>прошла обучение в самых престижных мировых школах: VidalSassoon, UweBreuer, Doloresи др.</li>
                        </ul>
                    </div>
                    <div className='vrpmb-subtitle'><h1>Услуги оказываемые мастером</h1></div>
                    <div className='vrpmb-services'>
                        <div className='vrpmb-services-item'>
                            <a>Замечательная услуга 1</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='vrpmb-services-item'>
                            <a>Замечательная услуга 2</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='vrpmb-services-item'>
                            <a>Замечательная услуга 3</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='vrpmb-services-item'>
                            <a>Замечательная услуга 4</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='vrpmb-services-item'>
                            <a>Замечательная услуга 5</a>
                            <a>от XX00 руб.</a>
                        </div>
                        <div className='vrpmb-services-item'>
                            <a>Замечательная услуга 6</a>
                            <a>от XX00 руб.</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='vrpmb-portfolio'>
                <h1>ПОРТФОЛИО</h1>
                <div className='vrpmb-works'>
                    <div className='vrpmb-row'><img src={workImg1} alt=''/><img src={workImg2} alt=''/></div>
                    <div className='vrpmb-row'><img src={workImg3} alt=''/></div>
                </div>
            </div>
        </div>        )
    }}
}


export default VeraPage;