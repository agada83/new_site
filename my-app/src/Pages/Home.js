import React, { Component } from 'react';
import '../fonts/Montserrat-Black.ttf'
import '../App.css'
import FirstComp from '../Companents/FirstComp/FirstComp.js'
import Test from '../Companents/test/test.js'
import ServicesComp from '../Companents/ServicesComp/ServicesComp.js'
import Info from '../Companents/Info/Info.js'
import Team from '../Companents/Team/Team.js'
import Sale from '../Companents/Sale/Sale.js'
import TopServices from '../Companents/TopServices/TopServices.js';
import Interior from '../Companents/Interior/Interior.js'
import AboutUs from '../Companents/AboutUs/AboutUs.js';
import Advantages from '../Companents/Advantages/Advantages.js';
import Appointment from '../Companents/Appointment/Appointment.js';
import PartnerBrands from '../Companents/PartnerBrands/PartnerBrands.js';
import Footer from '../Companents/Footer/Footer.js';

class Home extends Component {
  render() {

    return (
      <div style={{display:'block'}} id='main'>
        {/* <FirstComp /> */}
        {/* <ServicesComp /> */}
        {/* <Info /> */}
        {/* <Team /> */}
        {/* <Sale /> */}
        {/* <TopServices /> */}
        {/* <Interior /> */}
        {/* <div className='hm-au-div'>
          <h1>О НАС</h1>
          <h2>TINTO beauty salon–пространство для вашей индивидуальности!</h2>
        </div>
        <AboutUs /> */}
        <Advantages />
        {/* <Appointment />
        <PartnerBrands /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Home;