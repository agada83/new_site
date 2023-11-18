import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png'

class Header extends Component {
    render() {
        return (
            <>
            <Navbar fixed='top' collapseOnSelect expand="md" bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            height="auto"
                            width="214"
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
                            <Nav.Link href='/services' className="mb-20 mb-md-0"> Услуги </Nav.Link>
                            <Nav.Link href='/about' className="mb-20 mb-md-0"> О нас </Nav.Link>
                            <Nav.Link href='/promo' className="mb-20 mb-md-0"> Акции </Nav.Link>
                            <Nav.Link href='/prices' className="mb-20 mb-md-0"> Прайс </Nav.Link>
                            <Nav.Link href='/masters' className="mb-20 mb-md-0"> Специалисты </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        );
    }
}

export default Header;