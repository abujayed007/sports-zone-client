import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const {user, logOut}  = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(() =>{

    })
    .catch(error => console.error(error))
  }
    return (
        <Navbar className='p-4' expand="lg" bg="dark" variant="light">
          <Image style={{height:"65px"}} src='https://i0.wp.com/www.sportszone.com.ng/wp-content/uploads/2022/06/SPORTS-ZONE-LOGO.png?fit=500%2C500&ssl=1'></Image>
          <Navbar.Brand className='text-danger' to='/'>Sports Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to='/sports' className='pe-2'>Sports</Link>
            </Nav>
            <Link to='/blogs' className='me-3'> Blogs</Link>
            <Nav>
            <>
              {
                user?.uid || user?.photoURL? 
                <>
                <Image roundedCircle style={{height:'40px'}} src={user.photoURL}></Image>
                <span className='me-3 ms-2 text-white mt-2 fw-bolder'>{user?.displayName}</span>
                <Button onClick={handleLogOut} variant='light'>Log Out</Button>
                </> :
                <>
                  <Link className='me-3' to='/login'>Log In</Link>
                  <Link to='/register'>Register</Link>
                </>
              } 
              </>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;