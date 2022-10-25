import React from 'react';
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='p-4' expand="lg" bg="dark" variant="light">
          <Image style={{height:"65px"}} src='https://i0.wp.com/www.sportszone.com.ng/wp-content/uploads/2022/06/SPORTS-ZONE-LOGO.png?fit=500%2C500&ssl=1'></Image>
          <Navbar.Brand className='text-danger' to='/'>Sports Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to='/sports' className='pe-2'>Sports</Link>
            </Nav>
            <Nav>
              <Link className='pe-2'>
               Log In
              </Link>
              <Link>
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;