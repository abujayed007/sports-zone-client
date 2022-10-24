import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar className='p-4' expand="sm" bg="light" variant="light">
          <Image style={{height:"65px"}} src='https://i0.wp.com/www.sportszone.com.ng/wp-content/uploads/2022/06/SPORTS-ZONE-LOGO.png?fit=500%2C500&ssl=1'></Image>
          <Navbar.Brand to=''>Sports Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link  href="#memes">
               Log In
              </Nav.Link>
              <Nav.Link href="#deets">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;