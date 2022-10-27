import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authprovider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        toast.success('success full login')
      })
  }

  return (
    <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5 border border-primary p-2'>
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <div>New to this site? Please  <Link to='/register'>Signup</Link></div>
    </Form>

  )

};

export default Login;