
import React from 'react';

import google from '../../../../src/images/google.png'
import Facebook from '../../../../src/images/facebook.webp'
import github from '../../../../src/images/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    let errorElement;
    if (error || error2) {   
        errorElement =  <div>
            <p className="text-danger text-center">Error: {error?.message} {error2?.message}</p>
          </div>
      }
      if (loading || loading2) {
        return <p className="text-success text-center">Loading...</p>;
      }
      if (user || user2) {
        navigate('/home')
      }
    return (<div>
        <div className="d-flex align-items-center">
            <div style={{height: "1px"}} className="bg-primary w-50"></div>
            <p className="mt-2 px-2">or</p>
            <div style={{height: "1px"}} className="bg-primary w-50"></div>
        </div>
        {errorElement}
        <div className="text-center">
            <button onClick={() =>signInWithGoogle()}className="btn btn-info text-white w-75 my-2"><img style={{height:"20px"}} className="rounded-circle mx-2" src={google}alt="" /> Google Sign in</button>
        </div>
        
        <div className="text-center">
            <button className="btn btn-primary w-75 my-2"><img style={{height:"20px"}} className="rounded-circle mx-2" src={Facebook}alt="" /> Facebook Sign in</button>
        </div>
        <div className="text-center">
            <button onClick={() =>signInWithGithub()} className="btn btn-dark w-75 my-2"><img style={{height:"20px"}} className="rounded-circle mx-2" src={github}alt="" /> Github Sign in</button>
        </div>
        </div>
    );
};

export default SocialLogin;