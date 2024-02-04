import React, { Component } from 'react';
import './TopServices.css'
import TSCarousel from './TSCarousel.js';


class TopServices extends Component {
    render() {
  
      return (
            <div className='ts-body' id='top-services'>
                <h1>ТОП-УСЛУГИ</h1>
                <h2>Услуги ради которых стоит к нам приехать</h2>
                <TSCarousel />
            </div>
        );
    }
  }
   
  export default TopServices;