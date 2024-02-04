import React, { Component } from 'react';
import './Sale.css'


class Sale extends Component {
    render() {
        const redirectToPage = () => {
            // Укажите URL страницы, на которую вы хотите перейти
            const targetPageUrl = "#registration";
            
            // Переносим пользователя на указанную страницу
            window.location.href = targetPageUrl;
          };
        return (
            <div className='bg-light'>
                <div className='black-glass'>
                    <div className='pole'>
                        <h1>ЛУЧШЕЕ ДЛЯ НАШИХ КЛИЕНТОВ</h1>
                        <p><b>Скидка 20%</b> на первый визит в салон красоты TINTO</p>
                        <p><b>Скидка 20%</b> в день рождения в салоне красоты TINTO</p>
                        <button onClick={redirectToPage}>Записаться</button>
                    </div>    
                </div>
            </div>
        );
    }
  }
   
  export default Sale;