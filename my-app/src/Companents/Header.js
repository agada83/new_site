import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import logo from './logo1.png';

import Home from '../Pages/Home'
import About from '../Pages/About'
import Promo from '../Pages/Promo'
import Prices from '../Pages/Prices'
import Masters from '../Pages/Masters'

class Header extends Component {
    render() {
        return (
            <>
            <Navbar sticky='top' collapseOnSelect expand="md" bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            height="auto"
                            width="72"
                            className="d-inline-block align-top"    
                            alt="logo"
                        /> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="me-auto">
                            {/* ... */}
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link href='/services' className="mb-20 mb-md-20"> Услуги </Nav.Link>
                            <Nav.Link href='/about' className="mb-20 mb-md-20"> О нас </Nav.Link>
                            <Nav.Link href='/promo' className="mb-20 mb-md-20"> Акции </Nav.Link>
                            <Nav.Link href='/prices' className="mb-20 mb-md-20"> Прайс </Nav.Link>
                            <Nav.Link href='/masters' className="mb-20 mb-md-20"> Специалисты </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/promo' element={<Promo/>}/>
                    <Route exact path='/prices' element={<Prices/>}/>
                    <Route exact path='/masters' element={<Masters/>}/>
                </Routes>
            </Router>


        </>
        );
    }
}

export default Header;