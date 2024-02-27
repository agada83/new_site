import React, { Component } from 'react';
import bgImg from "../../assets/bgImg.png"
import '../../App.css'
import './FirstComp.css'

class FirstComp extends Component {
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
  render() {
    const { windowWidth } = this.state;
    const redirectToPage = () => {
      // Укажите URL страницы, на которую вы хотите перейти
      const targetPageUrl = "#registration";
      
      // Переносим пользователя на указанную страницу
      window.location.href = targetPageUrl;
    };
    if (windowWidth <= 768) {
      return (
          <div>
              <div className='fcmb-box'>
                <div className='fcmb-text'>
                  <h1>TINTO</h1>
                  <h1>BEAUTY</h1>
                  <h1>SALON</h1>
                </div>
                <div className='fcmb-button'>
                  <a><b>Скидка 20%</b><br/>на первое посещение</a>             
                  <button onClick={redirectToPage}>Записаться</button>
                </div>
              </div>
          </div>
      );
  } else {
      return (
      <div className='fc-box'>
        <div className='fc-top'>
            <h1 className='fc-name'>TINTO</h1>
            <div className='fc-button'>
              <a><b>Скидка 20%</b><br/>на первое посещение</a>             
              <button onClick={redirectToPage}>Записаться</button>
            </div>
        </div>
        <div className='fc-center'>
          <h1 className='fc-name'>BEAUTY SALON</h1>
        </div>
        <div className='fc-bottom'>
          <a>Нижняя Красносельская 35 стр. 3, п. 2<br/> +7 905 798 16 28</a>
        </div>
      </div>
    );
  }
}
}
export default FirstComp;