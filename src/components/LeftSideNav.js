import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courseCategories, setCourseCategories]=useState([])
    useEffect(()=>{
        fetch('https://assignmnet-server.vercel.app/courses')
        .then(res=>res.json())
        .then(data=>setCourseCategories(data))
    },[])
    return (
        <div className='sticky-top'>
           <h1>Our All Courses </h1>
           {
            courseCategories.map(category=><nav className="navbar bg-light mt-5 ">
            <div className="container-fluid mt-2">
              <Link className="navbar-brand" to={`/category/${category.id}`}>
                <img src={category.img} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-3"/>
              {category.name}
              </Link>
            </div>
          </nav>)
           }
        </div>
    );
};

export default LeftSideNav;