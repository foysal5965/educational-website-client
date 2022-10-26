import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaGoogle ,FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authprovider/AuthProvider';
import Toast from 'react-bootstrap/Toast';
const Register = () => {
    const {createUser,updateName, emailVerify}= useContext(AuthContext)
    const handleSubmit = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const confirmPassword = form.confirmpassword.value;
        createUser(email, password)
        .then(res=>{
            const user= res.user;
            // console.log(user);
        })
        updateName(name)
        .then(result=>{
            emailVerify()
            .then(res=>{
            
            })
        })
        .catch(error=>console.log(error))

    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-50 border border-primary p-3 mt-4 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirmpassword' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='d-flex justify-content-center'>
                    
                    Sign up
                </Button>
                <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='text-muted text-center'>
            Signup with social accounts
          </p>
        <div className='d-flex justify-content-center '>
        <FaGoogle className='w-25'></FaGoogle>
         <FaGithub></FaGithub>
        </div>
          <div className=''>Already have an account? <Link to='/login'>Signup</Link></div>
        </div>
            
            </Form>
        </div>
    );
};

export default Register;