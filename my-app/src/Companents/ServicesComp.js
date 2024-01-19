import React, { Component } from 'react';
import '../App.css'
import CarouselHair from './Carousel-hair/Carousel-hair.js';
import MakeupService from './MakeupService/MakeupService.js';


class ServicesComp extends Component {
    render() {
        return (
            <div className='font-montserrat-regular' style={{position: 'relative', top: '140px',}} >
                <div style={{textAlign:'center', fontSize:'45px'}}>
                    <a>НАШИ УСЛУГИ</a>
                </div>
                <div style={{position: 'relative', top: '100px', marginLeft: '20%', fontSize:'24px'}}>
                    <a>Парикмахерские услуги</a>
                    <hr style={{position: 'relative', top: '-33px', marginLeft: '21%', width:'300px',height:'3px'}}/>
                </div>
                <div style={{ display:'grid',position: 'relative', top: '100px'}}>
                    <CarouselHair/>
                </div>
                <div style={{position: 'relative', top: '100px', marginLeft: '20%', fontSize:'24px'}}>
                    <a>Парикмахерские услуги</a>
                    <hr style={{position: 'relative', top: '-33px', marginLeft: '21%', width:'300px',height:'3px'}}/>
                </div>
                <div style={{ display:'grid',position: 'relative', top: '100px'}}>
                <MakeupService/>

                </div>
            </div>
        );
    }
}

export default ServicesComp;