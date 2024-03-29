import React, { Component } from 'react';
import './PartnerBrands.css'


class PartnerBrands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth
        };
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ windowWidth: window.innerWidth });
    };
    render() {
        const { windowWidth } = this.state;
        if (windowWidth > 768) {
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
        } else {
            return (
                <div className='pbmb-body' id='partner-brands'>
                    <div className='pbmb-content'>
                        <div className='mb-first-line'>
                            <div className='pbmb-item lux-mb'><a><b>LUX</b><br/>ANCEE</a></div>
                            <div className='pbmb-item pure-mb'><a>SO PURE</a></div>
                            <div className='pbmb-item keune-mb'><a><b>KEUNE</b><br/>HAIRCOSMETICS</a></div>
                        </div>
                        <div className='mb-second-line'>
                            <div className='pbmb-item terra-mb'><div><p>B</p><p>Y</p></div><div className='terra-mb-kostil'><h1>TERRY</h1></div></div>
                            <div className='pbmb-item pure-mb'><a>BALMAN</a></div>
                            <div className='pbmb-item pure-mb'><a>PROEDIT</a></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default PartnerBrands;