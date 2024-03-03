import React, { Component } from 'react';
import './Info.css'


class Info extends Component {
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

    if (windowWidth <= 768) {
      return (        
      <div className='infomb-box'>
        <div className='infomb-about'>
          <h1>Всё что вы хотели узнать о Tinto Beauty Salon</h1>
            <div className='mbdivhr' />
        </div>
        <div className='firstmb-about'>
        <div className='mbdiva'><a href='/#team'>НАШИ СПЕЦИАЛИСТЫ</a><div className='mbdivht' /></div>
        <div className='mbdiva'><a href='#interior'>ИНТЕРЬЕР ПОМЕЩЕНИЯ</a><div className='mbdivht' /></div>
        <div className='mbdiva'><a href='/prices'>СТОИМОСТЬ УСЛУГ</a><div className='mbdivht' /></div>
        <div className='mbdiva'><a href='#footer'>НАШИ КОНТАКТЫ</a><div className='mbdivht' /></div>
        <div className='mbdiva'><a href='/#top-services'>ФИРМЕННЫЕ ПРОЦЕДУРЫ</a><div className='mbdivht' /></div>
        <div className='mbdiva'><a href='#partner-brands'>БРЕДНЫ У НАС</a><div className='mbdivht' /></div>
      </div>

  </div>

        );
      } else {
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
};
  export default Info;