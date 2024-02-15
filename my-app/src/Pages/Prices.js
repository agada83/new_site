import React, { Component } from 'react';
import Salon from '../Companents/Salon/Salon.js';
import Appointment from '../Companents/Appointment/Appointment.js';
import Sale from '../Companents/Sale/Sale.js';
import PartnerBrands from '../Companents/PartnerBrands/PartnerBrands.js';
import Footer from '../Companents/Footer/Footer.js';


export default class Prices extends Component {
    render() {
        return (
            <div>
                <Salon />
                <Appointment />
                <Sale />
                <PartnerBrands />
                <Footer />
            </div>
        );
    }
}
