import React, { Component } from 'react';
import './Info.css'
import { HashLink } from 'react-router-hash-link';


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
        <HashLink to={'/#team'} style={{ textDecoration: 'none' }}>
        <div className='mbdiva'><a>НАШИ СПЕЦИАЛИСТЫ</a><div className='mbdivht' /></div>
        </HashLink>
        <HashLink to={'#interior'} style={{ textDecoration: 'none' }}>
        <div className='mbdiva'><a>ИНТЕРЬЕР ПОМЕЩЕНИЯ</a><div className='mbdivht' /></div>
        </HashLink>
        <HashLink to={'/prices'} style={{ textDecoration: 'none' }}>
        <div className='mbdiva'><a>СТОИМОСТЬ УСЛУГ</a><div className='mbdivht' /></div>
        </HashLink>
        <HashLink to={'#footer'} style={{ textDecoration: 'none' }}>
        <div className='mbdiva'><a>НАШИ КОНТАКТЫ</a><div className='mbdivht' /></div>
        </HashLink>
        <HashLink to={'/#top-services'} style={{ textDecoration: 'none' }}>
        <div className='mbdiva'><a>ФИРМЕННЫЕ ПРОЦЕДУРЫ</a><div className='mbdivht' /></div>
        </HashLink>
        <HashLink to={'#partner-brands'} style={{ textDecoration: 'none' }}>
        <div className='mbdiva'><a>БРЕДНЫ У НАС</a><div className='mbdivht' /></div>
        </HashLink>
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
            <HashLink to={'/#team'} style={{ textDecoration: 'none' }}>
              <div className='diva'><a>НАШИ СПЕЦИАЛИСТЫ</a><div className='divht' /></div>
              </HashLink>
              <HashLink to={'#interior'} style={{ textDecoration: 'none' }}>
              <div className='diva'><a>ИНТЕРЬЕР ПОМЕЩЕНИЯ</a><div className='divht' /></div>
              </HashLink>
              <HashLink to={'/prices'} style={{ textDecoration: 'none' }}>
              <div className='diva'><a>СТОИМОСТЬ УСЛУГ</a><div className='divht' /></div>
              </HashLink>
            </div>
            <div className='second-about' >
              <HashLink to={'#footer'} style={{ textDecoration: 'none' }}>
              <div className='diva'><a>НАШИ КОНТАКТЫ</a><div className='divht' /></div>
              </HashLink>
              <HashLink to={'/#top-services'} style={{ textDecoration: 'none' }}>
              <div className='diva'><a>ФИРМЕННЫЕ ПРОЦЕДУРЫ</a><div className='divht' /></div>
              </HashLink>
              <HashLink to={'#partner-brands'} style={{ textDecoration: 'none' }}>
              <div className='diva'><a>БРЕДНЫ У НАС</a><div className='divht' /></div>
              </HashLink>
            </div>

        </div>
        );
    }
  }
};
  export default Info;