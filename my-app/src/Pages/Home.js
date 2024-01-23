import React, { Component } from 'react';
import '../fonts/Montserrat-Black.ttf'
import '../App.css'
import FirstComp from '../Companents/FirstComp.js'
import ServicesComp from '../Companents/ServicesComp.js'
import Info from '../Companents/Info/Info.js'
import Team from '../Companents/Team/Team.js'
import Sale from '../Companents/Sale/Sale.js'
import TopServices from '../Companents/TopServices/TopServices.js';
import Interior from '../Companents/Interior/Interior.js'
import AboutUs from '../Companents/AboutUs/AboutUs.js';
import Advantages from '../Companents/Advantages/Advantages.js';

class Home extends Component {
  render() {

    return (
      <div style={{display:'block'}}>
        {/* <FirstComp />
        <ServicesComp />
        <Info />
        <Team />
        <Sale />
        <TopServices />
        <Interior />
        <AboutUs /> */}
        <Advantages />
      </div>
    );
  }
}

export default Home;