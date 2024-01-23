import React, { Component } from 'react';
import './Sale.css'


class Sale extends Component {
    render() {
  
      return (
            <div className='bg-light'>
                <div className='black-glass'>
                    <div className='pole'>
                        <h1>ЛУЧШЕЕ ДЛЯ НАШИХ КЛИЕНТОВ</h1>
                        <p><b>Скидка 20%</b> на первый визит в салон красоты TINTO</p>
                        <p><b>Скидка 20%</b> в день рождения в салоне красоты TINTO</p>
                        <button>Записаться</button>
                    </div>    
                </div>
            </div>
        );
    }
  }
   
  export default Sale;