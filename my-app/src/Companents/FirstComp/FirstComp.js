import React, { Component } from 'react';
import bgImg from "../../assets/bgImg.png"
import '../../App.css'
import './FirstComp.css'

class FirstComp extends Component {
  render() {
    const redirectToPage = () => {
      // Укажите URL страницы, на которую вы хотите перейти
      const targetPageUrl = "#registration";
      
      // Переносим пользователя на указанную страницу
      window.location.href = targetPageUrl;
    };
    return (
      <div className='fc-box'>
        <div className='fc-top'>
            <a>TINTO</a>
            <div className='fc-button'>
              <a><b>Скидка 20%</b><br/>на первое посещение</a>             
              <button onClick={redirectToPage}>Записаться</button>
            </div>
        </div>
        <div className='fc-center'>
          <a>BEAUTY SALON</a>
        </div>
          <div className='fc-bottom'>
            <a>Нижняя Красносельская 35 стр. 3, п. 2<br/> +7 905 798 16 28</a>

          </div>
      </div>
    );
  }
}
 
export default FirstComp;