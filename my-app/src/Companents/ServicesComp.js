import React, { Component } from 'react';
import '../App.css'
import Carousel from './Carousel/Carousel.js';


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
                <div style={{marginLeft: '20%'}}>
                    <Carousel>
                        <div className='item item-1'>1</div>
                        <div className='item item-2'>2</div>
                        <div className='item item-3'>3</div>
                    </Carousel>


                </div>
            </div>

        );
    }
}

export default ServicesComp;