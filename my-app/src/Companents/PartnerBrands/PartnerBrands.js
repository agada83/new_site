import React, { Component } from 'react';
import './PartnerBrands.css'


class PartnerBrands extends Component {
    render() {
  
      return (
            <div className='pb-body'>
                <div className='first-line'>
                    <div className='pb-item lux'><a><b>LUX</b><br/>ANCEE</a></div>
                    <div className='pb-item pure'><a>SO PURE</a></div>
                    <div className='pb-item keune'><a><b>KEUNE</b><br/>HAIRCOSMETICS</a></div>
                </div>
                <div className='second-line'>
                    <div className='pb-item'><div className='terra'>123</div></div>
                    <div className='pb-item'>2</div>
                    <div className='pb-item'>3</div>
                </div>
            </div>
        );
    }
  }
   
  export default PartnerBrands;