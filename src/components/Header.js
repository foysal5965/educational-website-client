import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authprovider/AuthProvider';
import LeftSideNav from './LeftSideNav';
const Header = () => {
  const {user, logOut}= useContext(AuthContext)
  const handleLogOut = ()=>{
    logOut()
    .then(result=>{
      toast.warning('logged Out!')
    })
  }
  console.log(user)
    return (
      <Navbar collapseOnSelect expand="lg" className='shadow' variant="dark">
      <Container>
        <Navbar.Brand className='text-primary'>Apars Classroom</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link ><Link className='text-decoration-none' to='/home'>Home</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none' to='/courses'>Courses</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none' to='faq'>FAQ</Link></Nav.Link>
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
            {user?.email?
            <>
            <button onClick={handleLogOut}>LogOut</button>
            </>
            
            
            :<>
            <Link to='/login' className='text-decoration-none mx-3'>Login</Link>
            <Link to='register' className='text-decoration-none'>Register</Link>
            </>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;