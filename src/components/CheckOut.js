import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../contexts/authprovider/AuthProvider';
import { FaUser } from 'react-icons/fa';
const CheckOut = () => {
    const course = useLoaderData()
    const {user}= useContext(AuthContext)
    const {title, Fee, duration}=course
    return (
       <div>
        {user?.uid?
        <>
         <Card style={{ width: '18rem' }} className='mx-auto mt-5'>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          
          <Card.Text>
          <p>duration: {duration}</p>
      
          <p>Fee: {Fee}</p>
          <p>Congratulation you enrolled {title} course </p>
          </Card.Text>
          <Card.Link ><Link to='/'>Back to homepage</Link></Card.Link>
        
        </Card.Body>
      </Card>
        </>
        
        
        :<><h5 className='text-center'>You don't have an account please  <Link to='/login'>Login</Link></h5></>}
       </div>
    );
};

export default CheckOut;