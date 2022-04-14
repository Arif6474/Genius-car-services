import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../Shared/Loading/Loading";


const Login = () => {
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
   if(email){
    await sendPasswordResetEmail(email);
    toast('Sent email');
   }else{
     toast('Please enter your email address')
   }
  }
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  let errorElement;
  if(loading || sending){
    return <Loading></Loading>
}
  if (error) {   
      errorElement = <p className="text-danger text-center">Error: {error?.message} </p>
        
    }
  if(user){
    if(user){
      navigate(from, { replace: true });
     }
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
  };
  const navigateRegister = (event) => {
      navigate('/register')
  }
  return (
    <div className="container w-50 mx-auto my-4">
      <h2 className="text-primary text-center mt-4">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        
        {errorElement}
        <Button className="btn btn-primary w-50 mx-auto d-block my-2" type="submit">
          Login
        </Button>
      </Form>
      <p>New to Genius car? <span onClick={navigateRegister} className="text-primary">Register an account</span> </p>
      <p>Are you forget password? <span onClick={handleResetPassword} className="text-primary">Reset password</span> </p>
    <SocialLogin></SocialLogin>
    <ToastContainer />
    </div>
  );
};

export default Login;

