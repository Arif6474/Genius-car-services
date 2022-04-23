import React from 'react';

import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const RequireAuth = ({children}) => {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading) {
     return <Loading></Loading>
    }
    if (!user) {
      
     
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
     
    if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
      return <div className="mx-auto">
        <p className="text-center text-danger">Your email is not verified</p>
        <h4 className="text-center text-success">Please verified your email</h4>
        <button className="btn btn-primary"
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent verification email');
        }}
      >
        Send verification again
      </button>
      <ToastContainer></ToastContainer>
      </div>
    }
    
    return children;
};

export default RequireAuth;