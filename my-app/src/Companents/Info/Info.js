import React, { Component } from 'react';
import './Info.css'


class Info extends Component {
    render() {
  
      return (
        <div className='info-box'>
            <div className='info-about'>
            <h1>Всё что вы хотели узнать о Tinto Beauty Salon</h1>
            <div className='divhr' />
            </div>
            <div className='first-about'>
              <div className='diva' href='/masters'><a>НАШИ СПЕЦИАЛИСТЫ</a><div className='divht' /></div>
              <div className='diva' href='/masters'><a>ИНТЕРЬЕР ПОМЕЩЕНИЯ</a><div className='divht' /></div>
              <div className='diva' href='/masters'><a>СТОИМОСТЬ УСЛУГ</a><div className='divht' /></div>
            </div>
            <div className='second-about'>
              <div className='diva' href='/masters'><a>НАШИ КОНТАКТЫ</a><div className='divht' /></div>
              <div className='diva' href='/masters'><a>ФИРМЕННЫЕ ПРОЦЕДУРЫ</a><div className='divht' /></div>
              <div className='diva' href='/masters'><a>БРЕДНЫ У НАС</a><div className='divht' /></div>
            </div>

        </div>
        );
    }
  }
   
  export default Info;