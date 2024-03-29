import React, { Component } from 'react';
import './Advantages.css'
import marker from '../../assets/advantagesImg/advmarker.png'
import stars from '../../assets/advantagesImg/advstars.png'
import medal from '../../assets/advantagesImg/advmedal.png'


class Advantages extends Component {
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
    if (windowWidth > 768) {

        return (
        <div className='adv-body'>
            <div className='adv-content'>
                <div className='adv-item'>
                    <img src={marker}/>
                    <h2>УДОБНОЕ РАСПОЛОЖЕНИЕ</h2>
                    <a>10 минут до метро и <br/>5 до остановки</a>
                </div>
                <div className='adv-item'>
                    <img src={stars}/>
                    <h2>КОМФОРТ И КАЧЕСТВО</h2>
                    <a>4,8 - оценка наших<br/> клиентов</a>
                </div>
                <div className='adv-item'>
                    <img src={medal}/>
                    <h2>ЛУЧШИЕ МАСТЕРА</h2>
                    <a>Все наши мастера имеет<br/> квалификацию</a>
                </div>
            </div>
        </div>
        );

    } else {
    return (
        <div className='advmb-body'>
            <div className='advmb-content'>
                <div className='advmb-item'>
                    <img src={marker}/>
                    <div className='advmb-text'>
                    <h2>УДОБНОЕ РАСПОЛОЖЕНИЕ</h2>
                    <a>10 минут до метро и <br/>5 до остановки</a>
                    </div>
                </div>
                <div className='advmb-item'>
                    <img src={stars}/>
                    <div className='advmb-text'>
                    <h2>КОМФОРТ И КАЧЕСТВО</h2>
                    <a>4,8 - оценка наших<br/> клиентов</a>
                    </div>
                </div>
                <div className='advmb-item'>
                    <img src={medal}/>
                    <div className='advmb-text'>
                    <h2>ЛУЧШИЕ МАСТЕРА</h2>
                    <a>Все наши мастера имеет<br/> квалификацию</a>
                    </div>  
                </div>
            </div>
        </div>
                );
            }
          }
          }
   
  export default Advantages;