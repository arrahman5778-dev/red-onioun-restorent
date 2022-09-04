import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import logo from '../../../../Images/logo2.png'

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate =useNavigate();


  const handleLogin = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    navigate('/home')
  }
  return (
    <div className='container mx-auto  mt-5' style={{ width: '380px' }}>
      <div className='mx-auto mb-5' >
        <img className='mx-auto d-block' style={{ height: '70px' }} src={logo} alt="" />
      </div>
      <Form onSubmit={handleLogin}>
    
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} className='border-0 py-2' style={{ background: '#F5F5F5' }} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} className='border-0 py-2' style={{ background: '#F5F5F5' }} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className='w-100 rounded-sm border-0' style={{ background: '#F91944' }}>
          Login
        </Button>
      </Form>
      <p className='mt-2'>Are you New? <Link to='/signup' className='text-decoration-none mt-2 text-center'
        style={{ color: '#F91944' }} >Create a new account </Link></p>
    </div>
  );
};

export default Login;