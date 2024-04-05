import React, { Component } from 'react';
import AboutSalon from '../Companents/AboutSalon/AboutSalon.js'
import AboutUs from '../Companents/AboutUs/AboutUs.js'
import Info from '../Companents/Info/Info.js'
import Interior from '../Companents/Interior/Interior.js'
import PartnerBrands from '../Companents/PartnerBrands/PartnerBrands.js'
import Footer from '../Companents/Footer/Footer.js'
import Sale from '../Companents/Sale/Sale.js'
import OurWorks from '../Companents/OurWorks/OurWorks.js';



class About extends Component {
    render() {
        return (
            <div style={{display:'block'}} id='main'>
                <AboutSalon /> 
                <AboutUs/> 
                <Info /> 
                <Interior /> 
                <Sale /> 
                <OurWorks />
                <PartnerBrands />
                <Footer />
            </div>
        );
    }
}

export default About;