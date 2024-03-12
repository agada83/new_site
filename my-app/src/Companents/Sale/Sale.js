import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Sale.css';

class Sale extends React.Component {
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
            <div className='bg-light' id='promo'>
                <div className='black-glass'>
                    <div className='pole'>
                        <h1>ЛУЧШЕЕ ДЛЯ НАШИХ КЛИЕНТОВ</h1>
                        <p><b>Скидка 20%</b> на первый визит в салон красоты TINTO</p>
                        <p><b>Скидка 20%</b> в день рождения в салоне красоты TINTO</p>
                        {/* Используйте HashLink для прокрутки к нужному элементу */}
                        <HashLink to="/#registration" style={{textDecoration:'none'}}>
                            <button><a>Записаться</a></button>
                        </HashLink>
                    </div>    
                </div>
            </div>
        );
    } else {
        return(
            <div className='mb-bg-light' id='promo'>
                <div className='mb-black-glass'>
                    <div className='mb-pole'>
                        <h1>ЛУЧШЕЕ ДЛЯ НАШИХ КЛИЕНТОВ</h1>
                        <p><b>Скидка 20%</b> на первый визит в салон красоты TINTO</p>
                        <p><b>Скидка 20%</b> в день рождения в салоне красоты TINTO</p>
                        {/* Используйте HashLink для прокрутки к нужному элементу */}
                        <HashLink to="/#registration" style={{textDecoration:'none'}}>
                            <button><a>Записаться</a></button>
                        </HashLink>
                    </div>    
                </div>
            </div>        )
    }
    }
}

export default Sale;