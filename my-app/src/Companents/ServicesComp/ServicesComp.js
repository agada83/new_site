import React, { Component } from 'react';
import './ServicesComp.css'
import CarouselHair from './Carousel-hair.js';
import CarouselMake from './Carousel-make.js';


class ServicesComp extends Component {
    render() {
        return (
            <div className='sc-box' id='services'>
                <h1 className='sc-hair'>НАШИ УСЛУГИ</h1>
                <div>
                    <div className='sc-serv'><h1><nobr>Парикмахерские услуги</nobr></h1><div><hr/></div></div>
                    <CarouselHair/>
                </div>
                <div>
                    <div className='sc-serv'><h1><nobr>Макияж и визаж</nobr></h1><div><hr/></div></div>
                    <CarouselMake/>
                </div>
            </div>
        );
    }
}

export default ServicesComp;