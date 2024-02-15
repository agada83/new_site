import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Sale.css';

class Sale extends React.Component {
    render() {
        return (
            <div className='bg-light'>
                <div className='black-glass'>
                    <div className='pole'>
                        <h1>ЛУЧШЕЕ ДЛЯ НАШИХ КЛИЕНТОВ</h1>
                        <p><b>Скидка 20%</b> на первый визит в салон красоты TINTO</p>
                        <p><b>Скидка 20%</b> в день рождения в салоне красоты TINTO</p>
                        {/* Используйте HashLink для прокрутки к нужному элементу */}
                        <HashLink to="/#registration" smooth="boolean">
                            <button>Записаться</button>
                        </HashLink>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Sale;
