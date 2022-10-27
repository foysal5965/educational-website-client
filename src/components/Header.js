import React, { useContext, useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import toast, { Toaster } from 'react-hot-toast';
import { FaUser, FaUserEdit } from 'react-icons/fa';
import './header.css'
import { Link } from 'react-router-dom';

import { AuthContext } from '../contexts/authprovider/AuthProvider';
import LeftSideNav from './LeftSideNav';
const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const [darkMode, setDarkMode] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(result => {
        toast.warning('logged Out!')
      })
  }
  const icon = ()=>{
    toast.success('usdrtov')
  }
  console.log(user)
  return (
    <Navbar collapseOnSelect expand="lg" className='shadow' bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand className='text-white'>Apars Classroom</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link className='text-decoration-none text-white' to='/home'>Home</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none text-white' to='/coursess'>Courses</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to='/blog'>Blog</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-white' to='faq'>FAQ</Link></Nav.Link>
            <NavDropdown title="Course Names" className='d-lg-none' id="collasible-nav-dropdown">

              <NavDropdown.Item href="#action/3.2">
                <LeftSideNav></LeftSideNav>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>


            </NavDropdown>
          </Nav>
          <Nav>


           <Nav.Link>
              {user?.email ?
                <>

                  {user?.photoURL ?
                    <Image roundedCircle style={{ height: '40px' }}  className='my-5' src={user?.photoURL}></Image> :
                    <FaUser></FaUser>
                  }

                  <button onClick={handleLogOut} className='p-2 rounded mx-3'>LogOut</button>
                </>


                : <>
                 <Link to='/login' className='text-decoration-none mx-3 text-white '>Login</Link>
                  <Link to='register' className='text-decoration-none text-white '>Register</Link>
                </>}
               
            </Nav.Link>
            <div className={darkMode ? "dark-mode" : "light-mode"} >
                            <div className="containerr">
                                <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                                <div className="switch-checkbox">
                                    <label className="switch">
                                        <input type="checkbox" className='onchange' onChange={() => setDarkMode(!darkMode)} />
                                        <span className="slider round"> </span>
                                    </label>
                                </div>
                                <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
                            </div>
                            <div>
                                <h4>{darkMode ? "Dark" : "Light"}</h4>
                            </div>
                        </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;