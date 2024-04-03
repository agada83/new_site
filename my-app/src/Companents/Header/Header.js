import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo1.png';
import { HashLink } from 'react-router-hash-link';
import './Header.css'; // Импорт файла стилей

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            menuVisible: false  // добавляем начальное значение для меню
        };
        this.toggleMenu = this.toggleMenu.bind(this);  // привязываем метод к экземпляру класса
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

    toggleMenu() {
        this.setState(prevState => ({
            menuVisible: !prevState.menuVisible
        }));
    }

    render() {
        const { windowWidth, menuVisible } = this.state;

        if (windowWidth > 768) {
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
                                <HashLink to="/#services" className="nav-link">Услуги</HashLink>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">О нас</Link>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/#promo" className="nav-link">Акции</HashLink>
                            </li>
                            <li className="nav-item">
                                <Link to="/prices" className="nav-link">Прайс</Link>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/#team" className="nav-link">Специалисты</HashLink>
                            </li>
                        </ul> 
                        <hr/>      
                    </div>
                </nav>
            );
        } else {
            return (
                <nav className='navbarmb'>
                    <div className="navbarmb-brand">
                        <Link to="/">
                            <img
                                src={logo}
                                height="auto"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="navbarmb-nav">
                        <div className={"overlay" + (menuVisible ? ' active' : '')} onClick={this.toggleMenu}></div>
                            <div className="navbarmb-toggler" onClick={this.toggleMenu}>
                                <div className={menuVisible ? 'active' : ''}>
                                <hr />
                                <hr />
                                <hr />
                                </div>
                            </div>
                        <ul className={menuVisible ? 'active' : ''}>
                            <li className="navmb-item">
                                <HashLink to="/#services" className="navmb-link">Услуги</HashLink>
                            </li>
                            <li className="navmb-item">
                                <Link to="/about" className="navmb-link">О нас</Link>
                            </li>
                            <li className="navmb-item">
                                <HashLink to="/#promo" className="navmb-link">Акции</HashLink>
                            </li>
                            <li className="navmb-item">
                                <Link to="/prices" className="navmb-link">Прайс</Link>
                            </li>
                            <li className="navmb-item">
                                <HashLink to="/#team" className="navmb-link">Специалисты</HashLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}

export default Header;
