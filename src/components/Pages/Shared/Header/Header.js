import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import logo from '../../../../Images/logo2.png'
import './Header.css'

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout =()=>{
    signOut(auth)
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand href="#home">
                <img style={{ height: '30px' }} src={logo} alt="" />
              </Navbar.Brand>
            </Nav>
            <Nav >
              <Nav.Link href="#deets" className=' text-dark' >Cart</Nav.Link>
              { user ? <Nav.Link onClick={logout} href="#deets" className=' text-dark' >SignOut</Nav.Link>
              : <Nav.Link eventKey={2} as={Link} to='/login' className=' text-dark menu px-4'> Login</Nav.Link>
             }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;