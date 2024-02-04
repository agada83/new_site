import React, { Component } from 'react';
import './OurWorks.css';
import workImg1 from '../../assets/work1.png';

class OurWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAllRows: false,
        };
    }

    handleToggleRows = () => {
        this.setState((prevState) => ({
            showAllRows: !prevState.showAllRows,
        }));
    };

    render() {
        const { showAllRows } = this.state;

        return (
            <div className='ow-box'>
                <h1>НАШИ РАБОТЫ</h1>
                <div className={`ow-content ${showAllRows ? 'show-all-rows' : ''}`}>
                    <div className='ow-row'><img src={workImg1} alt=''/><img src={workImg1} alt=''/><img src={workImg1} alt=''/></div>
                    <div className='ow-row'><img src={workImg1} alt=''/><img src={workImg1} alt=''/><img src={workImg1} alt=''/></div>
                    <div className='ow-row'><img src={workImg1} alt=''/><img src={workImg1} alt=''/><img src={workImg1} alt=''/></div>
                    <div className='ow-row'><img src={workImg1} alt=''/><img src={workImg1} alt=''/><img src={workImg1} alt=''/></div>
                </div>
                <div className='toggle-button' onClick={this.handleToggleRows}>
                    {showAllRows ? 'Скрыть' : 'Показать еще'}
                    <hr/>
                </div>
            </div>
        );
    }
}

export default OurWorks;
