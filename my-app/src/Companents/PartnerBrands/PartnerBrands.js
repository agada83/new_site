import React, { Component } from 'react';
import './PartnerBrands.css'


class PartnerBrands extends Component {
    render() {
  
      return (
            <div className='pb-body' id='partner-brands'>
                <div className='pb-content'>
                <div className='first-line'>
                    <div className='pb-item lux'><a><b>LUX</b><br/>ANCEE</a></div>
                    <div className='pb-item pure'><a>SO PURE</a></div>
                    <div className='pb-item keune'><a><b>KEUNE</b><br/>HAIRCOSMETICS</a></div>
                </div>
                <div className='second-line'>
                    <div className='pb-item terra'><div><a>B<br/>Y</a></div><div className='terra-kostil'><h1>TERRY</h1></div></div>
                    <div className='pb-item pure'><a>BALMAN</a></div>
                    <div className='pb-item pure'><a>PROEDIT</a></div>
                </div>
                <div className='pb-hr'>
                    <h1>Бренды с которыми мы работаем</h1> <hr/>
                </div>
                </div>
            </div>
        );
    }
  }
   
  export default PartnerBrands;