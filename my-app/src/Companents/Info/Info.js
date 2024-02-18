import React, { Component } from 'react';
import './Info.css'


class Info extends Component {
  scrollToTopServices = () => {
    const topServicesElement = document.getElementById('top-services');
    if (topServicesElement) {
       topServicesElement.scrollIntoView({ behavior: 'smooth' });
    }
 };    
    render() {
      return (
        <div className='info-box'>
            <div className='info-about'>
            <h1>Всё что вы хотели узнать о Tinto Beauty Salon</h1>
            <div className='divhr' />
            </div>
            <div className='first-about'>
              <div className='diva'><a href='/#team'>НАШИ СПЕЦИАЛИСТЫ</a><div className='divht' /></div>
              <div className='diva'><a href='#interior'>ИНТЕРЬЕР ПОМЕЩЕНИЯ</a><div className='divht' /></div>
              <div className='diva'><a href='/prices'>СТОИМОСТЬ УСЛУГ</a><div className='divht' /></div>
            </div>
            <div className='second-about'>
              <div className='diva'><a href='#footer'>НАШИ КОНТАКТЫ</a><div className='divht' /></div>
              <div className='diva'><a href='/#top-services'>ФИРМЕННЫЕ ПРОЦЕДУРЫ</a><div className='divht' /></div>
              <div className='diva'><a href='#partner-brands'>БРЕДНЫ У НАС</a><div className='divht' /></div>
            </div>

        </div>
        );
    }
  }
   
  export default Info;