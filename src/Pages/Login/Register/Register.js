import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate =useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }
    const handleRegister = (event) => {
       event.preventDefault();
       const name = event.target.name.value;
       const email = event.target.email.value;
       const password = event.target.password.value;
       
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
              <button className="register-button" type="submit">Register</button>
          </form>
          <p>Already have an account? <span onClick={navigateLogin} className="text-danger">Please Login</span> </p>
        </div>
    );
};

export default Register;