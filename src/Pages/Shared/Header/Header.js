import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../../firebase.init"
import './Header.css'
import PageTitle from '../PageTitle/PageTitle';

const Header = () => {
   const [user, setUser] = useState({});
  
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
  
      } else {
        setUser({})
      }
    });
   }, []) 
 
   const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
   }
    return (
       
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
  <Container>
  <PageTitle title="Home"></PageTitle>
  <Navbar.Brand as={Link} to="/">Genius Car Services</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home#services">Services</Nav.Link>
      <Nav.Link href="/home#experts">Experts</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      { 
      user && <>
           <Nav.Link as={Link} to="addservice">Service</Nav.Link>
           <Nav.Link as={Link} to="manage">Manage</Nav.Link>
      </>
      
      }
     { user?.email ? <button onClick={handleSignOut} className="logout-btn" >Logout</button> : 
     <Nav.Link as={Link} to="login">
       Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
       
    );
};

export default Header;