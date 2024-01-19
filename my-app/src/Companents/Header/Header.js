import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo1.png';
import './Header.css'; // Импорт файла стилей


class Header extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <div className="navbar-brand">
                    <Link to="/">
                        <img
                            src={logo}
                            height="auto"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="navbar-nav">
                    <ul>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">Услуги</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">О нас</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/promo" className="nav-link">Акции</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/prices" className="nav-link">Прайс</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/masters" className="nav-link">Специалисты</Link>
                        </li>
                    </ul> 
                    <hr/>      
                </div>
            </nav>
        );
    }
}

export default Header;
