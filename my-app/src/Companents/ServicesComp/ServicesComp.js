import React, { Component } from 'react';
import './ServicesComp.css'
import CarouselHair from './Carousel-hair.js';


class ServicesComp extends Component {
    render() {
        return (
            <div className='sc-box'>
                <CarouselHair/>
            </div>
        );
    }
}

export default ServicesComp;