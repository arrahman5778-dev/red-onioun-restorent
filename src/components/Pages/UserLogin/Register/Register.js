import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../../../Images/logo2.png'
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useRef } from 'react';
import auth from '../../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);


  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const navigate = useNavigate();

  const [agrre, setAgrre] = useState(false);


  const handleSubmit = async e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log(email)
    navigate('/home')
  }



  return (
    <div className='container mx-auto  mt-5' style={{ width: '380px' }}>
      <div className='mx-auto mb-5' >
        <img className='mx-auto d-block' style={{ height: '70px' }} src={logo} alt="" />
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail">
          <Form.Control
            ref={nameRef}
            className='border-0 py-2'
            style={{ background: '#F5F5F5' }}
            type="text" placeholder="Name"
            required />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            className='border-0 py-2'
            style={{ background: '#F5F5F5' }}
            type="email"
            placeholder="Enter email"
            required />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            className='border-0 py-2'
            style={{ background: '#F5F5F5' }}
            type="password"
            placeholder="Password"
            required />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword">
          <Form.Control
            className='border-0 py-2'
            style={{ background: '#F5F5F5' }}
            type="password"
            placeholder="Confirm Password"
            required />
        </Form.Group>
        <Form.Group
          className="mb-3 border-0"
          controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgrre(!agrre)}
            className={agrre ? 'text-primary' : 'text-danger'}
            type="checkbox"
            label="Terms and conditions" />
        </Form.Group>
        <Button

          variant="primary"
          type="submit"
          className='w-100 rounded-sm border-0'
          style={{ background: '#F91944' }}>
          Submit
        </Button>
      </Form>
      <Link
        to='/login'
        className='text-decoration-none d-block mt-2 text-center'
        style={{ color: '#F91944' }} >
        Already  have an account </Link>
    </div>
  );
};

export default Register;