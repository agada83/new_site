import React, { Component } from 'react';
import './AboutSalon.css';
import asContentImg from '../../assets/asContentImg.png';
import asContentmbImg from '../../assets/asContentImgmb.png'; // Измененный путь к изображению для мобильных устройств

class AboutSalon extends Component {
    render() {
        return (
            <div className='as-box'>
                <h1>О САЛОНЕ</h1>
                <div className='as-content'>
                    {/* Используем разные изображения в зависимости от разрешения экрана */}
                    <img src={asContentImg} alt='Изображение салона' className='as-img-desktop' />
                    <img src={asContentmbImg} alt='Изображение салона' className='as-img-mobile' />
                    <div className='as-text'>
                        <p>&emsp;&emsp;Мы являемся одним из ведущих салонов красоты в Москве, и наша главная цель - предоставить вам лучший сервис и качество услуг. <br/>&emsp;&emsp;В нашем салоне работают только высококвалифицированные специалисты, которые постоянно проходят обучение и повышение квалификации. Мы следим за последними тенденциями в мире моды и красоты, чтобы предложить вам самые актуальные и стильные образы. <br/>&emsp;&emsp;Наш салон предлагает широкий спектр услуг: стрижки, окрашивания, уходы за волосами, маникюр, педикюр, макияж, татуаж и многое другое. Мы используем только самые лучшие и проверенные косметические средства, чтобы обеспечить вам наилучший результат. <br/>&emsp;&emsp;Кроме того, в нашем салоне вы найдете уютную атмосферу, дружелюбный персонал и высокий уровень сервиса. Мы всегда рады видеть вас в нашем салоне и готовы помочь вам стать еще красивее и увереннее в себе!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutSalon;
