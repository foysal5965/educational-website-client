import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LeftSideNav from './LeftSideNav';
const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='text-primary'>Apars Classroom</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/'>Courses</Link></Nav.Link>
            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
            <Nav.Link><Link to='faq'>FAQ</Link></Nav.Link>
            <NavDropdown title="Course Names" className='d-lg-none' id="collasible-nav-dropdown">
            
              <NavDropdown.Item href="#action/3.2">
               <LeftSideNav></LeftSideNav>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
             
           
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <Link to='login'>Log in</Link>
            <Link to='register'>Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;