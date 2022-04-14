import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree , setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate =useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }
    if(loading){
        return <Loading></Loading>
    }
    
    if(user){
        console.log(user);
    }
    const handleRegister = async (event) => {
       event.preventDefault();
       const name = event.target.name.value;
       const email = event.target.email.value;
       const password = event.target.password.value;
 
   await createUserWithEmailAndPassword(email, password);
   await updateProfile({ displayName : name});
         console.log('Updated profile');
          navigate('/home')

    }

    return (
        <div className="register-container">
            <h2 className="register-title">Please Register</h2>
          <form onSubmit={handleRegister} >
              <label htmlFor="name">Name</label>
              <input type="text" name="name"  placeholder="Your name" required/>
              <label htmlFor="email">Email</label>
              <input type="email" name="email"  placeholder="Your email address" required/>
              <label htmlFor="password">Password</label>
              <input type="password" name="password"  placeholder="Your password" required/>
              <input onClick={() =>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
              {/* <label className={agree ? 'text-success' : 'text-danger'} htmlFor="terms">Accept Genius car terms and condition</label> */}
              <label className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms">Accept Genius car terms and condition</label>
              <button  disabled={!agree} className="register-button" type="submit">Register</button>
          </form>
          <p>Already have an account? <span onClick={navigateLogin} className="text-danger">Please Login</span> </p>
        <SocialLogin></SocialLogin>
        
        </div>
    );
};

export default Register;
