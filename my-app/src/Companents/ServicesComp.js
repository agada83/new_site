import React, { Component } from 'react';
import '../App.css'


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
            </div>

        );
    }
}

export default ServicesComp;