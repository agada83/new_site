// Test.js
import React, { Component } from 'react';
import './test.css';
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

class Test extends Component {
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

        if (windowWidth <= 1024) {
            return (
                <div>
                    <div>123</div>
                </div>
            );
        } else {
            return (
                <div>
                    321
                </div>
            );
        }
    }
}

export default Test;
