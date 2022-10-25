import React from 'react';
import {Navbar} from "flowbite-react"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>

<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar to="https://flowbite.com/">
    <img
      src="https://img.freepik.com/free-vector/abstract-low-polygonal-graduation-cap-planet-earth-globe-model-map-e-learning-concept_127544-1106.jpg?size=626&ext=jpg&ga=GA1.2.1680277961.1665324040&semt=sph"
      className="mr-3 h-6 sm:h-9 rounded-lg"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Apars Classroom
    </span>
  </Navbar>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Link
      to="/navbars"
      active={true}
    >
      Home
    </Link>
    <Link to="/navbars">
      FAQ
    </Link>
    <Link to="/navbars">
      Courses
    </Link>
    <Link to="/navbars">
    Blog
    </Link>
    <Link to="/navbars">
      About Us
    </Link>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;