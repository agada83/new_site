import React, { Component } from 'react';
import './OurWorks.css';
import ektWork1 from '../../assets/worksImg/ektWork1.jpg';
import ektWork2 from '../../assets/worksImg/ektWork2.jpg';
import ektWork3 from '../../assets/worksImg/ektWork3.jpg';
import oksWork1 from '../../assets/worksImg/oksWork1.jpg';
import oksWork2 from '../../assets/worksImg/oksWork2.jpg';
import oksWork3 from '../../assets/worksImg/oksWork3.jpg';
import oksWork4 from '../../assets/worksImg/oksWork4.jpg';
import tWork1 from '../../assets/worksImg/tWork1.jpg';
import tWork2 from '../../assets/worksImg/tWork2.jpg';
import tWork3 from '../../assets/worksImg/tWork3.jpg';
import vWork1 from '../../assets/worksImg/vWork1.jpg';
import vWork2 from '../../assets/worksImg/vWork2.jpg';
import vWork3 from '../../assets/worksImg/vWork3.jpg';


class OurWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAllRows: false,
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
    handleToggleRows = () => {
        this.setState((prevState) => ({
            showAllRows: !prevState.showAllRows,
        }));
    };

    render() {
        const { showAllRows, windowWidth } = this.state;
        if (windowWidth > 590) {
          return (
            <div className='ow-box'>
                <h1>НАШИ РАБОТЫ</h1>
                <div className={`ow-content ${showAllRows ? 'show-all-rows' : ''}`}>
                    <div className='ow-row'><img src={ektWork1} alt=''/><img src={ektWork2} alt=''/><img src={ektWork3} alt=''/></div>
                    <div className='ow-row'><img src={oksWork4} alt=''/><img src={oksWork2} alt=''/><img src={oksWork3} alt=''/></div>
                    <div className='ow-row'><img src={tWork1} alt=''/><img src={tWork2} alt=''/><img src={tWork3} alt=''/></div>
                    <div className='ow-row'><img src={vWork1} alt=''/><img src={vWork2} alt=''/><img src={vWork3} alt=''/></div>
                </div>
                <div className='toggle-button' onClick={this.handleToggleRows}>
                    {showAllRows ? 'Скрыть' : 'Показать еще'}
                    <hr/>
                </div>
            </div>
                  );
                } else {
                    return (
                        <div className='owmb-box'>
                        <h1>НАШИ РАБОТЫ</h1>
                        <div className={`owmb-content ${showAllRows ? 'show-all-rows' : ''}`}>
                            <div className='owmb-row'><img src={ektWork1} alt=''/><img src={ektWork2} alt=''/></div>
                            <div className='owmb-row'><img src={ektWork3} alt=''/><img src={oksWork4} alt=''/></div>
                            <div className='owmb-row'><img src={oksWork2} alt=''/><img src={oksWork3} alt=''/></div>
                            <div className='owmb-row'><img src={tWork1} alt=''/><img src={tWork2} alt=''/></div>
                            <div className='owmb-row'><img src={tWork3} alt=''/><img src={vWork1} alt=''/></div>
                            <div className='owmb-row'><img src={vWork2} alt=''/><img src={vWork3} alt=''/></div>
                        </div>
                        <div className='toggle-button' onClick={this.handleToggleRows}>
                            {showAllRows ? 'Скрыть' : 'Показать еще'}
                            <hr/>
                        </div>
                    </div>
            );
        }
  }
}

export default OurWorks;
