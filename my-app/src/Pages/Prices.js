import React, { Component } from 'react';
import Salon from '../Companents/Salon/Salon.js';
import Sale from '../Companents/Sale/Sale.js';
import PartnerBrands from '../Companents/PartnerBrands/PartnerBrands.js';
import Footer from '../Companents/Footer/Footer.js';


export default class Prices extends Component {
    render() {
        return (
            <div id='main'>
                <Salon />
                <Sale />
                <PartnerBrands />
                <Footer />
            </div>
        );
    }
}
