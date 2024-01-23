import React, { Component } from 'react';
import './Advantages.css'
import marker from '../../assets/advantagesImg/advmarker.png'
import stars from '../../assets/advantagesImg/advstars.png'
import medal from '../../assets/advantagesImg/advmedal.png'


class Advantages extends Component {
    render() {
  
      return (
        <div className='adv-body'>
            <div className='adv-content'>
                <div className='adv-item'>
                    <img src={marker}/>
                    <h2>УДОБНОЕ РАСПОЛОЖЕНИЕ</h2>
                    <a>10 минут до метро и 5 до остановки</a>
                </div>
                <div className='adv-item'>
                    <img src={stars}/>
                    <h2>КОМФОРТ И КАЧЕСТВО</h2>
                    <a>4,8 - оценка наших<br/> клиентов</a>
                </div>
                <div className='adv-item'>
                    <img src={medal}/>
                    <h2>ЛУЧШИЕ МАСТЕРА</h2>
                    <a>Все наши мастера имеет квалификацию</a>
                </div>
            </div>
        </div>
      )
    }
  }
   
  export default Advantages;